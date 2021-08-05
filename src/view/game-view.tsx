import Game from "../model/game"
import TableView from "./table-view"

interface GameViewProps {
  readonly game: Game,
}

export default function GameView(props: GameViewProps) {
  return <TableView game={props.game} />;
}