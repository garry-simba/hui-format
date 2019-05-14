
export class Cache{
  private data:Map<string,any[]> = new Map();

  get(url:string):any[]|undefined{
    return this.data.get(url);
  }

  set(url:string, data:any[]){
    this.data.set(url, data);

  }

}
