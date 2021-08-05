export default class UID {
  private uid: number;

  private constructor(uid: number) {
    this.uid = uid;
  }

  equals(that: UID) {
    return this.uid === that.uid;
  }

  _internalID(): number {
    return this.uid;
  }

  static _internalCreate(uid: number): UID {
    return new UID(uid);
  }
}