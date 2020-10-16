import { PieceType, Piece } from "../store/pieces/models";

export function isGameOver(pieces: Piece[]) {
  return pieces.find(
    (piece) => piece.type === PieceType.Master && !piece.active
  );
}
