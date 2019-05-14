import * as THREE from "three";

import {HuiNode, GeometryNode, MeshNode, SkeletonNode, AnimationClipNode, AnimationTrack} from "./nodes/nodes"
import * as Constants from "./Constants"

export namespace ThreeBuilder{

  export function buildGeometry(node:GeometryNode){
    var geometry = new THREE.BufferGeometry();
    if(node.verticies){
      geometry.addAttribute( 'position', new THREE.BufferAttribute( node.verticies, 3 ) );
    }
    if(node.indices){
      geometry.setIndex(new THREE.BufferAttribute( node.indices, 1))
    }
    if(node.skinIndices){
      geometry.addAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( node.skinIndices, 4 ));
    }
    if(node.skinWeights){
      geometry.addAttribute( 'skinWeight', new THREE.Float32BufferAttribute( node.skinWeights, 4 ) );
    }
    return geometry;
  }

  export function buildSkeleton(skeletonNode:SkeletonNode){
    var bones:THREE.Bone[] = [];
    for(var boneNode of skeletonNode.bones){
      var bone = new THREE.Bone();
      bone.position.set(boneNode.x, boneNode.y, boneNode.z);
      if(boneNode.parent != Constants.BONE_NO_PARENT){
        var parentNode = skeletonNode.bones[boneNode.parent];
        bone.position.x += parentNode.tailX - parentNode.x;
        bone.position.y += parentNode.tailY - parentNode.y;
        bone.position.z += parentNode.tailZ - parentNode.z;
      }
      bones.push(bone);
    }
    for(var i = 0; i< bones.length; i++){
      bones[i].name = makeBoneName(i);
      if(skeletonNode.bones[i].parent != Constants.BONE_NO_PARENT){
        bones[skeletonNode.bones[i].parent].add(bones[i]);
      }
    }
    //add fake bones
    for(var i = 0; i< bones.length; i++){
    if(bones[i].children.length == 0){
      var bone = new THREE.Bone();
      bone.position.set(skeletonNode.bones[i].tailX, skeletonNode.bones[i].tailY, skeletonNode.bones[i].tailZ);
      bones[i].add(bone);
    }
  }
  return new THREE.Skeleton(bones);
}

export function buildAnimationClip(node:AnimationClipNode){
  var tracks:THREE.KeyframeTrack[] = [];
  for(var trackNode of node.tracks){
    if(trackNode.times.length == 0){
      continue;
    }
    tracks.push(buildKeyFrameTrack(trackNode));
  }
  return new THREE.AnimationClip(node.name, node.duration, tracks);
}

function buildKeyFrameTrack(trackNode:AnimationTrack):THREE.KeyframeTrack{
  var name = "";
  if (trackNode.type == Constants.TRACK_BONE_POSITION_KEYFRAMES){
    name = makeBoneName(trackNode.boneNumber) + ".position";
    return new THREE.VectorKeyframeTrack(name, trackNode.times, trackNode.values);
  } else if(trackNode.type == Constants.TRACK_BONE_ROTATION_KEYFRAMES){
    name = makeBoneName(trackNode.boneNumber) + ".quaternion";
      return new THREE.QuaternionKeyframeTrack(name, trackNode.times, trackNode.values);
  }else{
    throw new Error("can not create track");
  }
}

export function buildMesh(node:MeshNode, geometry:THREE.Geometry, mat?:THREE.Material){
//  var mesh:THREE.Mesh|THREE.SkinnedMesh;
  var material = mat || new THREE.MeshPhongMaterial( {
					skinning: true,
					color: 0x156289,
					emissive: 0x072534,
					flatShading: true
				} );
  if(node.skeletonId >=0){
    return new THREE.SkinnedMesh(geometry, material);
  }else{
    return new THREE.Mesh(geometry, material);
  }
}



function makeBoneName(boneNumber:number){
  return "bone" + boneNumber;
}

}
