import {HuiNode} from "./HuiNode"
import * as Constants from "../Constants"
import * as HuiMath from "../HuiMath"

export class MeshNode extends HuiNode{
  geometryId:number = -1;
  skeletonId:number = -1;

  constructor(data:Uint8Array){
    super()
    const PARAM_LENGTH = 4;
    var nodeLength = HuiNode.parseNodeLength(data);
    var dataPtr = Constants.NODE_HEADER_LENGTH;
    while(dataPtr<nodeLength){
      var param = data[dataPtr] + (data[dataPtr+1]<<8);
      switch(param){
        case Constants.MESH_PARAM_GEOMETRY:
        this.geometryId = data[dataPtr+2] + (data[dataPtr+3]<<8);
        break;

        case Constants.MESH_PARAM_SKELETON:
        this.skeletonId = data[dataPtr+2] + (data[dataPtr+3]<<8);
        break;

        default:
        console.error("wrong mesh parameter type:"+param);
        break;
      }
      dataPtr += PARAM_LENGTH;
    }

  }


}
