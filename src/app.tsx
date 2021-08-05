import { useState } from "react";
import Die from "./model/die";
import Game from "./model/game";
import Table from "./model/table";
import { TableInfo } from "./model/unit";
import GameView from "./view/game-view";

const table = new Table(5,5);
const game = new Game(table);
const player1 = game.addPlayer({
  name: 'Player 1',
  command: Die.d12,
});
const goboRaiders = game.addUnit(player1, {
  name: 'Goblin Raiders',
  cq: Die.d10,
  bar: Die.d12,
  mov: Die.d6,
});
const goboRaiderTableInfo = new TableInfo();
goboRaiderTableInfo.x = 1;
goboRaiderTableInfo.y = 2;
goboRaiderTableInfo.orientation = .1;
game.getUnit(goboRaiders).status = goboRaiderTableInfo;


export default function App() {
  return <GameView game={game} />
}