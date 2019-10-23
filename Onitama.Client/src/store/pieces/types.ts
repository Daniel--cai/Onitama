import { Piece } from "./models";

export const MOVE_PIECE = "MOVE_PIECE";
export const MOVING_PIECE = "MOVING_PIECE";

export interface PiecesState {
  collection: Piece[];
  current: Piece | undefined;
}

interface MovePieceAction {
  type: typeof MOVE_PIECE;
  payload: { id: number; x: number; y: number };
}

interface MovingPieceAction {
  type: typeof MOVING_PIECE;
  payload: number;
}

export type PiecesActionTypes = MovePieceAction | MovingPieceAction;
