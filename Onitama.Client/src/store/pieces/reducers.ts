import { PiecesActionTypes, MOVE_PIECE, PiecesState } from "./types";
import { Piece } from "./models";
import { initialise } from "./state";

const initialState = initialise();

export function piecesReducer(
  state: PiecesState = initialState,
  action: PiecesActionTypes
): Piece[] {
  switch (action.type) {
    case MOVE_PIECE:
      return state.map(piece => {
        if (piece.id === action.payload.id)
          return { ...piece, x: action.payload.x, y: action.payload.y };
        return piece;
      });
    default:
      return state;
  }
}
