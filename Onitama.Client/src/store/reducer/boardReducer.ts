import { Actions, AnyAction, getIndex } from "..";
import { Tile, Piece } from "../../model";
import { PieceTile } from "../../components/board";

export function boardReducer(
  state: Piece[] = [],
  action: AnyAction<Actions>
): Piece[] {
  switch (action.type) {
    case "movePiece":
      return state.map(piece => {
        if (piece.id === action.payload.id)
          return { ...piece, x: action.payload.x, y: action.payload.y };
        return piece;
      });
    default:
      return state;
  }
}
