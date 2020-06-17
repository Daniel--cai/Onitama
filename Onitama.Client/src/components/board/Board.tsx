import React, { useState, useEffect } from "react";
import "./Board.scss";
import { Piece, Colour } from "../../store/pieces/models";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosition,
  getIndex,
  getCalculatedOffsets,
} from "../../utils/coordinates";
import { PieceTile } from "./PieceTile";
import { Square } from "./Square";
import { movingPiece } from "../../store/pieces/actions";
import { State } from "../../store";
import { PiecesActionTypes } from "../../store/pieces/types";
import { Dispatch } from "redux";
import { Cards } from "../../constants/Card";

export const Board: React.FC<{ pieces: Piece[] }> = (props) => {
  const dispatch = useDispatch<Dispatch<PiecesActionTypes>>();
  const [validSquare, setValidSquare] = useState<number[]>([]);
  const card = useSelector<State, State["card"]>((store) => store.card);
  const pieces = useSelector<State, State["pieces"]>((store) => store.pieces);
  const game = useSelector<State, State["game"]>((store) => store.game);
  const [dragging, setDragging] = useState(false);

  function renderPiece(index: number) {
    const [x, y] = getPosition(index);
    const piece = props.pieces.find((piece) => piece.x === x && piece.y === y);

    function handleDragging(isDragging: boolean, index = -1) {
      console.log("draggin:", isDragging);
      setDragging(isDragging);
      dispatch(movingPiece(index));
    }

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

  function getValidSquares(anchorX: number, anchorY: number): number[] {
    let offsets = getCalculatedOffsets(Cards[card.selected], anchorX, anchorY);
    const occupied = pieces.collection.map((piece) =>
      getIndex(piece.x, piece.y)
    );
    return [...Array(25)].map((_, i) => {
      const isInOffset = offsets.includes(i);
      const isOppositeOccupied =
        occupied.includes(i) &&
        pieces.collection.find((piece) => {
          const [x, y] = getPosition(i);
          return piece.x === x && piece.y === y;
        })!.colour === Colour.White;
      const isOccupied = occupied.includes(i);
      return isInOffset && (isOppositeOccupied || !isOccupied) ? 1 : 0;
    });
  }
  useEffect(() => {
    if (!dragging || !pieces.current) {
      console.log("reset");
      setValidSquare([]);
    } else if (pieces.current) {
      console.log("current");
      setValidSquare(getValidSquares(pieces.current.x, pieces.current.y));
    }
  }, [dragging, pieces.current]);
  console.log(game);
  return (
    <div className="board">
      {[...Array(25)].map((_, index) => {
        return (
          <Square
            key={index}
            index={index}
            colour={validSquare[index] === 1 ? "green" : "white"}
            validDrop={validSquare[index] === 1}
          >
            {renderPiece(index)}
          </Square>
        );
      })}
    </div>
  );
};
