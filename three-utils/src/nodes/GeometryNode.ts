import {HuiNode} from "./HuiNode"
import * as Constants from "../Constants"
import * as HuiMath from "../HuiMath"


export class GeometryNode extends HuiNode{
  verticies?:Float32Array;
  indices?:Uint32Array;
  skinIndices?:Uint16Array;
  skinWeights?:Float32Array;

  constructor(data:Uint8Array){
    super();
    var nodeLength = HuiNode.parseNodeLength(data);
    var dataPtr = Constants.NODE_HEADER_LENGTH;
    var attrLength = 0;
    while(dataPtr<nodeLength){
      var attrType = data[dataPtr];
      attrLength = HuiMath.getUint24(data, dataPtr +1);
      var attrDataLength = attrLength - Constants.GEOMETRY_ATTRIB_HEADER_LENGTH;
      switch(attrType){
        case Constants.GEOMETRY_ATTR_VERTICIES:
        this.verticies = new Float32Array(attrDataLength / 2);
        for(var i = 0; i< this.verticies.length; i++){
          this.verticies[i] = HuiMath.getFloat16(data, dataPtr + Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i*2);
        }
        break;

        case Constants.GEOMETRY_ATTR_TRIANGLE_FACES:
        this.indices = new Uint32Array(attrDataLength / 2) //uint16 in file
        for(var i = 0; i< this.indices.length; i++){
        this.indices[i] = HuiMath.getUint16(data, dataPtr + Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i*2);
      }
      break;

      case Constants.GEOMETRY_ATTR_SKIN_INDICES:
      this.skinIndices = new Uint16Array(attrDataLength);
      for(var i = 0; i< this.skinIndices.length; i++){
        this.skinIndices[i] = data[dataPtr +  Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i];
      }
      break;

      case Constants.GEOMETRY_ATTR_SKIN_WEIGHTS:
      this.skinWeights = new Float32Array(attrDataLength);
      for(var i = 0; i< this.skinWeights.length; i++){
        var val = data[dataPtr +  Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i];
        this.skinWeights[i] = val/255.0;
      }
      break;

      default:
      console.error("wrong geometry attribute type:"+attrType);
      break;
    }
    dataPtr += attrLength;
  }
  this.normalizeSkinWeights(4);
}

private normalizeSkinWeights(valuesPerVertex:number){
  if(!this.skinWeights){
    return;
  }
  for(var i = 0; i< this.skinWeights.length; i+= valuesPerVertex){
    var sum = 0;
    for(var j =i; j < i+valuesPerVertex; j++){
      sum += this.skinWeights[j];
    }
    var factor = 1.0 / sum;
    for(var j =i; j < i+valuesPerVertex; j++){
      this.skinWeights[j] *= factor;
    }
  }
}


}
