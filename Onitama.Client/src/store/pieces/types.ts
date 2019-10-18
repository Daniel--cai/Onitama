import { Piece } from "./models";

export const MOVE_PIECE = "MOVE_PIECE";

export type PiecesState = Piece[];

interface MovePieceAction {
  type: typeof MOVE_PIECE;
  payload: { id: number; x: number; y: number };
}

export type PiecesActionTypes = MovePieceAction;
