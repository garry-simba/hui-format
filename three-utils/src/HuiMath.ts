
/*
* converts Float16 to Number
*/
  export function int16AsFloat(value:number){
    var sign = (value & 0x8000) >> 15;
    var exp = (value & 0b0111110000000000)>> 10;
    var mantissa = (value & 0x03FF);
    if(exp == 0 && mantissa == 0){
      return 0;
    }
    if(exp == 0b11111){
      if(mantissa == 0) {
        return (sign)?-Infinity:Infinity;
      }else return NaN;
    }
    exp = exp - 15;
    var f32 = new Float32Array(1);
    var i32 = new Int32Array(f32.buffer);
    var resInt = (0x01 & sign) << 31;
    resInt = resInt |((exp + 0x7f)<<23);
    resInt = resInt |(mantissa<<13);
    i32[0] = resInt;
    return f32[0];
  }

  export function getUint24(data:Uint8Array, offset:number){
    return data[offset] + (data[offset + 1]<<8) + (data[offset + 2]<<16);
  }

  export function getUint16(data:Uint8Array, offset:number){
    return data[offset] + (data[offset + 1]<<8);
  }

  export function getFloat16(data:Uint8Array, offset:number){
    var intval = data[offset] + (data[offset + 1]<<8);
    return int16AsFloat(intval);
  }
