import {HuiNode} from "./HuiNode"
import {AnimationTrack} from "./AnimationTrack"
import * as Constants from "../Constants"
import * as HuiMath from "../HuiMath"

export class AnimationClipNode extends HuiNode{
  name:string;
  tracks:AnimationTrack[] = [];
  duration:number = 0;

  constructor(data:Uint8Array){
    super()
    var nodeLength = HuiNode.parseNodeLength(data);
    var dataPtr = Constants.NODE_HEADER_LENGTH;
    var nameLength = HuiMath.getUint16(data, dataPtr);
    var nameBuf = new Uint8Array(data.buffer, data.byteOffset + dataPtr + 2, nameLength);
    this.name = new TextDecoder("utf-8").decode(nameBuf);
    dataPtr+= 2 + nameLength;
    while(dataPtr < nodeLength-4){
      var trackRecordLength = HuiMath.getUint24(data, dataPtr+1);
      var trackBuf = new Uint8Array(data.buffer, data.byteOffset + dataPtr)
      var track = new AnimationTrack(trackBuf);
      this.tracks.push(track);
      if(this.duration < track.getDuration()){
        this.duration = track.getDuration();
      }
      dataPtr += trackRecordLength;
    }
  }

}
