import { PiecesActionTypes, MOVE_PIECE, MOVING_PIECE } from "./types";

export function movePiece(id: number, x: number, y: number): PiecesActionTypes {
  return {
    type: MOVE_PIECE,
    payload: { id, x, y }
  };
}

export function movingPiece(id: number): PiecesActionTypes {
  return {
    type: MOVING_PIECE,
    payload: id
  };
}
