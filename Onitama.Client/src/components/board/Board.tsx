import React, { useState, useEffect } from "react";
import "./Board.scss";
import classnames from "classnames";
import { useDrag, useDrop } from "react-dnd";
import { Piece, PieceType, Colour } from "../../store/pieces/models";
import { useDispatch, useSelector } from "react-redux";
import { getPosition } from "../../utils/coordinates";
import { movePiece, movingPiece } from "../../store/pieces/actions";
import { State } from "../../store";
import { PiecesActionTypes } from "../../store/pieces/types";
import { Dispatch } from "redux";

export const Board: React.FC<{ pieces: Piece[] }> = props => {
  const dispatch = useDispatch<Dispatch<PiecesActionTypes>>();
  function renderPiece(index: number) {
    const [x, y] = getPosition(index);
    const piece = props.pieces.find(piece => piece.x === x && piece.y === y);
    if (piece) {
      return (
        <PieceTile
          type={piece.type}
          colour={piece.colour}
          id={piece.id}
          onDrag={handleDragging}
        />
      );
    }
    return null;
  }
  const board = new Array(25).fill("");
  const [validSquare, setValidSquare] = useState<number[]>([]);
  const piece = useSelector<State, State["pieces"]>(store => store.pieces);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) {
      setValidSquare([]);
    } else {
      setValidSquare([1, 2, 3, 4, 5]);
    }
  }, [dragging]);

  function handleDragging(isDragging: boolean, index = -1) {
    setDragging(isDragging);
    dispatch(movingPiece(index));
  }
  return (
    <div className="board">
      {board.map((_, index) => {
        return (
          <Square
            key={index}
            index={index}
            colour={validSquare.includes(index) ? "green" : "white"}
          >
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
  onDrag: any;
}> = props => {
  const type =
    props.type === PieceType.Master ? "piece--master" : "piece--pupil";
  const colour = props.colour === Colour.Black ? "piece--blue" : "piece--red";

  const currentCard = useSelector<State, State["card"]>(store => store.card);

  const [{ isDragging }, drag] = useDrag({
    item: { type: props.id.toString() },
    canDrag: currentCard !== -1,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  useEffect(() => {
    props.onDrag(isDragging, props.id);
  }, [isDragging]);
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
  colour: "green" | "white";
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
    <div
      className={classnames(
        "tile",
        { "tile--isOver": isOver },
        { "tile--isValid": props.colour === "green" }
      )}
      ref={drop}
    >
      {props.children}
    </div>
  );
};
