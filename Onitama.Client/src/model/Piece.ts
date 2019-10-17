import { PieceType } from "./PieceType";
import { Colour } from ".";

export interface Piece {
  type: PieceType;
  colour: Colour;
  x: number;
  y: number;
  active: boolean;
  id: number;
}
