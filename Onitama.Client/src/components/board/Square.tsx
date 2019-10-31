import React from "react";
import "./Board.scss";
import classnames from "classnames";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { useDispatch } from "react-redux";
import { getPosition } from "../../utils/coordinates";
import { movePiece } from "../../store/pieces/actions";

export const Square: React.FC<{
  index: number;
  colour: "green" | "white";
  children: any;
  validDrop: boolean;
}> = props => {
  const dispatch = useDispatch();
  const [x, y] = getPosition(props.index);

  const onDrop = (item: any) => {
    dispatch(movePiece(parseInt(item.type), x, y));
  };

  const canDrop = (item: any, monitor: DropTargetMonitor) => props.validDrop;

  const [{ isOver }, drop] = useDrop({
    accept: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    drop: onDrop,
    canDrop: canDrop,
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  return (
    <div
      ref={drop}
      className={classnames(
        "tile",
        { "tile--isOver": isOver },
        { "tile--isValid": props.colour === "green" }
      )}
    >
      {props.children}
    </div>
  );
};
