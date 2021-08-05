import UID from './uid'

type ForEachCallback<V> = (value: V, key: UID, map: Map<UID, V>) => void;

export default class UIDMap<V> {
  private map: Map<number, V> = new Map();

  clear() { this.map.clear(); }
  
  delete(uid: UID): boolean { return this.map.delete(uid._internalID()); }
  
  forEach(callbackfn: ForEachCallback<V>, thisArg?: any) {
    const translatedCallback = (v: V, k: number) => callbackfn(v, UID._internalCreate(k), thisArg);
    this.map.forEach(translatedCallback, this.map);
  } 

  get(uid: UID): V | undefined { return this.map.get(uid._internalID()); }

  has(uid: UID): boolean { return this.map.has(uid._internalID()); }

  set(uid: UID, value: V): this {
    this.map.set(uid._internalID(), value);
    return this;
  }

  get size(): number { return this.map.size; }

  keys(): UID[] {
    const keys = [];
    for (const key of this.map.keys()) {
      keys.push(UID._internalCreate(key));
    }
    return keys;
  }
}