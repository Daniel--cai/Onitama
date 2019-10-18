import React from "react";
import "./Board.scss";
import classnames from "classnames";
import { useDrag, useDrop } from "react-dnd";
import { Piece, PieceType, Colour } from "../../store/pieces/models";
import { useDispatch } from "react-redux";
import { getPosition } from "../../utils/coordinates";
import { movePiece } from "../../store/pieces/actions";

export const Board: React.FC<{ pieces: Piece[] }> = props => {
  function renderPiece(index: number) {
    const [x, y] = getPosition(index);
    const piece = props.pieces.find(piece => piece.x === x && piece.y === y);
    if (piece) {
      return (
        <PieceTile type={piece.type} colour={piece.colour} id={piece.id} />
      );
    }
    return null;
  }
  const board = new Array(25).fill("");
  return (
    <div className="board">
      {board.map((_, index) => {
        return (
          <Square key={index} index={index}>
            {renderPiece(index)}
          </Square>
        );
      })}
    </div>
  );
};

export const PieceTile: React.FC<{
  type: PieceType;
  colour: Colour;
  id: number;
}> = props => {
  const type =
    props.type === PieceType.Master ? "piece--master" : "piece--pupil";
  const colour = props.colour === Colour.Black ? "piece--blue" : "piece--red";

  const [{ isDragging }, drag] = useDrag({
    item: { type: props.id.toString() },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return (
    <div
      className={classnames("piece", type, colour, {
        "piece--is-dragging": isDragging
      })}
      ref={drag}
    >
      {props.id}
    </div>
  );
};

export const Square: React.FC<{
  index: number;
  children: any;
}> = props => {
  const dispatch = useDispatch();
  const [x, y] = getPosition(props.index);

  const onDrop = (item: any) => {
    dispatch(movePiece(parseInt(item.type), x, y));
  };

  const [{ isOver }, drop] = useDrop({
    accept: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    drop: onDrop,
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <div className={classnames("tile", { "tile--isOver": isOver })} ref={drop}>
      {props.children}
    </div>
  );
};
