import {HuiNode} from "./HuiNode"
import * as Constants from "../Constants"
import * as HuiMath from "../HuiMath"

export class AnimationTrack{
  type:number;
  boneNumber:number = 0xFFFF;
  times:number[] = [];
  values:number[] = [];
  
  constructor(data:Uint8Array){
    this.type = data[0];
    var trackRecordLength = HuiMath.getUint24(data, 1);

    switch (this.type){
      case Constants.TRACK_BONE_POSITION_KEYFRAMES:{
        const FRAME_RECORD_LENGTH = 8;
        this.boneNumber = HuiMath.getUint16(data, 4);
        var offset = 6;
        var time = 0;
        while (offset < trackRecordLength){
          var dt = HuiMath.getFloat16(data, offset);
          time += dt;
          this.times.push(time);
          this.values.push(HuiMath.getFloat16(data, offset + 2));
          this.values.push(HuiMath.getFloat16(data, offset + 4));
          this.values.push(HuiMath.getFloat16(data, offset + 6));
          offset += FRAME_RECORD_LENGTH;
        }
      }
      break;

      case Constants.TRACK_BONE_ROTATION_KEYFRAMES:{
        const FRAME_RECORD_LENGTH = 8;
        this.boneNumber = HuiMath.getUint16(data, 4);
        var offset = 6;
        var time = 0;
        while (offset < trackRecordLength){
          var dt = HuiMath.getFloat16(data, offset);
          time += dt;
          this.times.push(time);
          var x = HuiMath.getFloat16(data, offset + 2);
          var y = HuiMath.getFloat16(data, offset + 4);
          var z = HuiMath.getFloat16(data, offset + 6);
          var w = Math.sqrt(1 - x*x - y*y - z*z);
          this.values.push(x, y, z, w);
          offset += FRAME_RECORD_LENGTH;
        }
      }
      break;

      default:
      console.error("unknown animation track type: " + this.type);
      break;
    }

  }

  getDuration(){
    if(this.times.length > 0){
      return this.times[this.times.length -1];
    }
    return 0;
  }


}
