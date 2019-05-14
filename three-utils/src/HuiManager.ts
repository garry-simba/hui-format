import * as THREE from "three";

import {Cache} from "./Cache"
import {HuiNode, GeometryNode, MeshNode, SkeletonNode, AnimationClipNode} from "./nodes/nodes"
import * as Constants from "./Constants"
import {ThreeBuilder} from "./ThreeBuilder"

export class HuiManager{
  private fileLoader:any;
  private cache:Cache;

  constructor(loader?:any){
    if (!loader){
      this.fileLoader = new THREE.FileLoader();
      this.fileLoader.setResponseType("arraybuffer");
    }
    this.cache = new Cache();
  }

  loadScene(url:string, callback:(scene:any)=>void, onError?:(err:any)=>void){
    var builtNodes = this.cache.get(url);
    if(builtNodes){
      callback(this.buildSceneFromNodes(builtNodes));
    }else{
      this.fileLoader.load(url, (data:any)=>{
          if(data instanceof ArrayBuffer){
            var parsedNodes = this.parseNodes(new Uint8Array(data));
            var builtNodes = this.buildNodes(parsedNodes);
            this.cache.set(url, builtNodes);
            callback(this.buildSceneFromNodes(builtNodes));
          }else{
            console.error("loaded data is not ArrayBuffer");
          }
        },  undefined, (err:any)=>{console.error(err); if(onError)onError(err)});
    }

    this.fileLoader.load()
  }

  private buildSceneFromNodes(builtNodes:any[]){
    var skeleton = undefined;
    var animations:THREE.AnimationClip[] = [];
    var scene = new THREE.Object3D();
    for(var node of builtNodes){
      if (node instanceof THREE.Skeleton){
        skeleton = this.cloneSkeleton(node);
        break;
      }
    }
    for(var node of builtNodes){
      if(node instanceof THREE.SkinnedMesh && skeleton){
        var skinnedMesh = new THREE.SkinnedMesh(node.geometry, node.material)
        scene.add(skinnedMesh)
        skinnedMesh.add(skeleton.bones[0])
        skinnedMesh.bind(skeleton)
        skinnedMesh.remove(skeleton.bones[0])

      //  scene.add(skinnedMesh)
      }else if (node instanceof THREE.Mesh){
          var mesh = new THREE.Mesh(node.geometry, node.material)
          scene.add(mesh);
      }else if(node instanceof THREE.AnimationClip){
        animations.push(node);
      }
    }
    if (skeleton){
      var armature = new THREE.Object3D();
      armature.position.copy(skeleton.bones[0].position);
      skeleton.bones[0].position.set(0,0,0);
      armature.add(skeleton.bones[0])
      scene.add(armature);
    }

    return {
      scene:scene,
      animations:animations
    }
  }

 private cloneSkeleton(skeleton: THREE.Skeleton){
   var clonedBones:THREE.Bone[] = [];
   for(var bone of skeleton.bones){
     if(!bone.parent) {
       var clonedRootBone = bone.clone(true);
       clonedRootBone.traverse((b)=>{
         if(b instanceof THREE.Bone && b.name != "") clonedBones.push(b);
       });
     }
   }
   return new THREE.Skeleton(clonedBones);
 }

  private parseNodes(data:Uint8Array){
    var parsedNodes:HuiNode[] = [];
    var nodeStart = 0;
    while (nodeStart < data.byteLength){
      var node = undefined;
      var nodeBuf = new Uint8Array(data.buffer, data.byteOffset + nodeStart);
      var nodeType = nodeBuf[0];
      var nodeLength = HuiNode.parseNodeLength(nodeBuf);
      switch(nodeType){
        case Constants.NODE_GEOMETRY:
          node = new GeometryNode(nodeBuf);
        break;

        case Constants.NODE_MESH:
          node = new MeshNode(nodeBuf);
        break;

        case Constants.NODE_SKELETON:
          node = new SkeletonNode(nodeBuf);
        break;

        case Constants.NODE_ANIMATION_CLIP:
          node = new AnimationClipNode(nodeBuf);
        break;

        default:
          console.error("unknown node type:" + nodeType);
        break;
      }
      if(node){
        parsedNodes.push(node);
      }else{
        throw "node not parsed";
      }
      nodeStart += nodeLength;
    }
    return parsedNodes;
  }

 private buildNodes(nodes:HuiNode[]){
   var builtNodes:any[] = new Array(nodes.length);
   for(var i = 0; i< nodes.length; i++){
     var node  = nodes[i];
     if(node instanceof GeometryNode){
       builtNodes[i] = ThreeBuilder.buildGeometry(node);
     }else if(node instanceof SkeletonNode){
       builtNodes[i] = ThreeBuilder.buildSkeleton(node);
     }else if(node instanceof AnimationClipNode){
       builtNodes[i] = ThreeBuilder.buildAnimationClip(node);
     }
   }
   for(var i = 0; i< nodes.length; i++){
     var node  = nodes[i];
     if(node instanceof MeshNode){
       var geometry = builtNodes[node.geometryId];
       builtNodes[i] = ThreeBuilder.buildMesh(node, geometry);
     }
   }
   return builtNodes;
 }


}

///@ts-ignore
global["HuiManager"] = HuiManager;
