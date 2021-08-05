import UID from './uid'

export default class Entity<Type> {
  readonly uid: UID;
  readonly data: Type;

  constructor(uid: UID, data: Type) {
    this.uid = uid;
    this.data = data;
  }
}

