export class HuiNode {
    public static parseNodeLength(node:Uint8Array):number{
      return node[1] + (node[2] <<8) + (node[3] <<16);
    }
    
  }
