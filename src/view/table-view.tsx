import React from "react";
import Game from "../model/game";
import Table from "../model/table";
import UnitView from "./unit-view";

interface TableViewProps {
  readonly game: Game,
}

export default function TableView(props: TableViewProps) {
  const style: React.CSSProperties = {
    width: props.game.table.width + 'in',
    height: props.game.table.height + 'in',
    background: 'tan',
    position: 'relative',
  };
  return (
  <div style={style}>
    {props.game.units.map(unit => <UnitView unit={unit} />)}
  </div>
  );
}