import {
  PiecesActionTypes,
  MOVE_PIECE,
  PiecesState,
  MOVING_PIECE
} from "./types";
import { Piece } from "./models";
import { initialise } from "./state";

const initialState = initialise();

export function piecesReducer(
  state: PiecesState = initialState,
  action: PiecesActionTypes
): PiecesState {
  switch (action.type) {
    case MOVE_PIECE:
      return {
        ...state,
        collection: state.collection.map(piece => {
          if (piece.id === action.payload.id)
            return { ...piece, x: action.payload.x, y: action.payload.y };
          return piece;
        })
      };
    case MOVING_PIECE:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}
