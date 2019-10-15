import React from "react";
import "./Board.scss";
import classnames from "classnames";
enum PieceType {
  Pupil,
  Master
}

interface Piece {
  type: PieceType;
  colour: Colour;
}

enum Colour {
  White,
  Black
}

interface Tile {
  piece?: Piece;
}

const COLUMNS = "abcdefgh".split("");

export const Board: React.FC<{ tiles: number[] }> = props => {
  const board: Tile[] = new Array(25).fill("");
  // for (var i = 0; i < board.length; i++) {
  //   board[i] = new Array(5);
  //   for (var j = 0; j < board.length; j++) {
  //     board[i][j] = {};
  //   }
  // }

  board[Position(0, 0)] = {
    piece: { type: PieceType.Pupil, colour: Colour.White }
  };
  board[Position(0, 1)] = {
    piece: { type: PieceType.Pupil, colour: Colour.White }
  };
  board[Position(0, 2)] = {
    piece: { type: PieceType.Master, colour: Colour.White }
  };
  board[Position(0, 3)] = {
    piece: { type: PieceType.Pupil, colour: Colour.White }
  };
  board[Position(0, 4)] = {
    piece: { type: PieceType.Pupil, colour: Colour.Black }
  };
  board[Position(4, 0)] = {
    piece: { type: PieceType.Pupil, colour: Colour.Black }
  };
  board[Position(4, 1)] = {
    piece: { type: PieceType.Pupil, colour: Colour.Black }
  };
  board[Position(4, 2)] = {
    piece: { type: PieceType.Master, colour: Colour.Black }
  };
  board[Position(4, 3)] = {
    piece: { type: PieceType.Pupil, colour: Colour.Black }
  };
  board[Position(4, 4)] = {
    piece: { type: PieceType.Pupil, colour: Colour.Black }
  };

  console.log(board);
  return (
    <div className="board">
      {board.map((tile, index) => {
        if (!board[index].piece) return <Tile />;
        const piece: Piece = board[index].piece as Piece;
        return <Piece type={piece.type} colour={piece.colour} />;
      })}
    </div>
  );
};

const Position = (x: number, y: number) => {
  return y + x * 5;
};

export const Piece: React.FC<{ type: PieceType; colour: Colour }> = props => {
  const type =
    props.type == PieceType.Master ? "piece--master" : "piece--pupil";
  const colour = props.colour == Colour.Black ? "piece--blue" : "piece--red";
  return (
    <div className="tile">
      <div className={classnames("piece", type, colour)} />
    </div>
  );
};

export const Tile: React.FC = props => {
  return <div className="tile"> </div>;
};
