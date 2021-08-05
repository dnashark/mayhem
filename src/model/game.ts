import Entity from './entity'
import UID from './uid'
import Player from './player'
import {GameUnit, UnitData} from './unit'
import Table from './table'

export default class Game {
  private uidCounter_: number = 1;
  private players_: Entity<Player>[] = [];
  private units_ : Entity<GameUnit>[] = [];
  readonly table: Table

  constructor(table: Table) {
    this.table = table;
  }

  get players(): readonly Entity<Player>[] { return this.players_; }
  get units(): readonly Entity<GameUnit>[] { return this.units_; }

  addPlayer(player: Player): UID {
    const playerEntity = this.entitize(player);
    this.players_.push(playerEntity)
    return playerEntity.uid;
  }
  
  addUnit(playerId: UID, unitData: UnitData): UID {
    if (!this.players_.some(e => e.uid.equals(playerId))) {
      throw 'Adding unit to unknown player ID.';
    }

    const unit = new GameUnit(unitData, playerId);
    const unitEntity = this.entitize(unit);
    this.units_.push(unitEntity);
    return unitEntity.uid;
  }

  getUnit(id: UID): GameUnit {
    const unit = this.units_.find(u => u.uid.equals(id));
    if (!unit) throw `Unit with ID ${id._internalID} doesn't exist.`

    return unit.data;
  }

  private entitize<Type>(data: Type): Entity<Type> {
    const uid = UID._internalCreate(this.uidCounter_++);
    return new Entity(uid, data);
  }
}
