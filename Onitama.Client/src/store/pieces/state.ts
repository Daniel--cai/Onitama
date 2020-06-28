import { Piece, Colour, PieceType } from "./models";
import { PiecesState } from "./types";

let pieceCounter = 0;

export function initialise(): PiecesState {
  const collection: Piece[] = [
    initPiece(0, 0, Colour.Red, PieceType.Pupil),
    initPiece(1, 0, Colour.Red, PieceType.Pupil),
    initPiece(2, 0, Colour.Red, PieceType.Master),
    initPiece(3, 0, Colour.Red, PieceType.Pupil),
    initPiece(4, 0, Colour.Red, PieceType.Pupil),
    initPiece(0, 1, Colour.Blue, PieceType.Pupil),
    initPiece(1, 4, Colour.Blue, PieceType.Pupil),
    initPiece(2, 4, Colour.Blue, PieceType.Master),
    initPiece(3, 4, Colour.Blue, PieceType.Pupil),
    initPiece(4, 4, Colour.Blue, PieceType.Pupil)
  ];
  return { collection, current: undefined };
}

export function initPiece(
  x: number,
  y: number,
  colour: Colour,
  type: PieceType
): Piece {
  return { id: pieceCounter++, active: true, x, y, colour, type };
}
