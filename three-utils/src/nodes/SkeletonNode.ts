import {HuiNode} from "./HuiNode"
import * as Constants from "../Constants"
import * as HuiMath from "../HuiMath"


export interface Bone{
  x:number;
  y:number;
  z:number;
  tailX:number;
  tailY:number;
  tailZ:number;
  parent:number;
}

export class SkeletonNode  extends HuiNode{
  bones:Bone[] = [];

  constructor(data:Uint8Array){
    super()
    const BONE_RECORD_LENGTH = 14;
    var nodeLength = HuiNode.parseNodeLength(data);
    var dataPtr = Constants.NODE_HEADER_LENGTH;
    while(dataPtr<nodeLength){
      var param = data[dataPtr] + (data[dataPtr+1]<<8);
      var bone:Bone = {
        x:HuiMath.getFloat16(data, dataPtr),
        y:HuiMath.getFloat16(data, dataPtr + 2),
        z:HuiMath.getFloat16(data, dataPtr + 4),
        tailX:HuiMath.getFloat16(data, dataPtr + 6),
        tailY:HuiMath.getFloat16(data, dataPtr + 8),
        tailZ:HuiMath.getFloat16(data, dataPtr + 10),
        parent:HuiMath.getUint16(data, dataPtr + 12),
      }
      this.bones.push(bone);
      dataPtr += BONE_RECORD_LENGTH;
    }

  }

  
}
