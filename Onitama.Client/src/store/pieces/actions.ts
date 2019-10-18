import { PiecesActionTypes, MOVE_PIECE } from "./types";

export function movePiece(id: number, x: number, y: number): PiecesActionTypes {
  return {
    type: MOVE_PIECE,
    payload: { id, x, y }
  };
}
