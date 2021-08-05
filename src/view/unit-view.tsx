import React from "react";
import Entity from "../model/entity";
import { GameUnit, TableInfo } from "../model/unit";

interface UnitViewProps {
  readonly unit: Entity<GameUnit>,
}

export default function UnitView(props: UnitViewProps) {
  if (!(props.unit.data.status instanceof TableInfo)) throw 'TableInfo expected for unit to be rendered.';

  const style: React.CSSProperties = {
    width: `${props.unit.data.status.width}in`,
    height: `${props.unit.data.status.height}in`,
    border: '1px solid black',
    boxSizing: 'border-box',
    background: 'white',
    position: 'absolute',
    top: `${props.unit.data.status.y}`,
    left: `${props.unit.data.status.x}`,
    transform: `rotate(${props.unit.data.status.orientation}turn)`,
  };
  return <div style={style}>{props.unit.data.data.name}</div>
}