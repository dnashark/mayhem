import Die from './die';
import UID from './uid';

export interface UnitData {
  readonly name: string,
  readonly mov: Die,
  readonly cq: Die,
  readonly bar: Die,
}

export class TableInfo {
  x: number = 0;
  y: number = 0;
  get width(): number { return 1.5; }
  get height(): number { return 1.5; }
  get orientation(): number { return this.orientation_; }
  set orientation(orientation: number) {
    if (orientation < 0 || orientation >= 1) throw 'Orientation must be in range [0, 1).'
    this.orientation_ = orientation;
  }

  private orientation_: number = 0;
}

export const OFF_TABLE = Symbol('OFF_TABLE');
type OFF_TABLE = typeof OFF_TABLE;

export const DESTROYED = Symbol('DESTROYED');
type DESTROYED = typeof DESTROYED;

export class GameUnit {
  readonly data: UnitData;
  readonly owner: UID;
  status: TableInfo | OFF_TABLE | DESTROYED = OFF_TABLE;

  constructor(data: UnitData, owner: UID) {
    this.data = data;
    this.owner = owner;
  }
}
