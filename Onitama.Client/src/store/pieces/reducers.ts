import {
  PiecesActionTypes,
  MOVE_PIECE,
  PiecesState,
  MOVING_PIECE,
} from "./types";
import { initialise } from "./state";
import { Colour } from "./models";
import { isGameOver } from "../../utils/gamelogic";
const initialState = initialise();

export function piecesReducer(
  state: PiecesState = initialState,
  action: PiecesActionTypes
): PiecesState {
  switch (action.type) {
    case MOVE_PIECE:
      const collection = state.collection.map((piece) => {
        if (
          piece.x === action.payload.x &&
          piece.y === action.payload.y &&
          piece.colour === Colour.Red
        ) {
          return { ...piece, x: -1, y: -1, active: false };
        }
        if (piece.id === action.payload.id) {
          return { ...piece, x: action.payload.x, y: action.payload.y };
        }
        return piece;
      });

      if (isGameOver(collection)) {
        alert("game over!");
      }

      return {
        ...state,
        collection,
        current: undefined,
      };
    case MOVING_PIECE:
      return {
        ...state,
        current: state.collection.find((piece) => piece.id === action.payload),
      };
    default:
      return state;
  }
}
