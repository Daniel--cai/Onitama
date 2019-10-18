export enum PieceType {
  Pupil,
  Master
}

export enum Colour {
  White,
  Black
}

export interface Tile {
  piece: Piece | null;
}

export interface Piece {
  type: PieceType;
  colour: Colour;
  x: number;
  y: number;
  active: boolean;
  id: number;
}
