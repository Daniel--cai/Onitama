/** @jsx jsx */
import { jsx } from "theme-ui";
import * as styles from "./Board.styles";
import React from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { getPosition } from "../../../utils/coordinates";
import { movePiece } from "../../../store/pieces/actions";
import { playCard } from "../../../store/card/actions";
import { playTurn } from "../../../store/game/actions";
import { State } from "../../../store";

export const Square: React.FC<{
  index: number;
  colour: "green" | "white";
  children: any;
  validDrop: boolean;
}> = (props) => {
  const dispatch = useDispatch();
  const card = useSelector((store: State) => store.card);
  const [x, y] = getPosition(props.index);

  const onDrop = (item: any) => {
    dispatch(playTurn(parseInt(item.type), x, y, card.selected));
    dispatch(playCard());
    dispatch(movePiece(parseInt(item.type), x, y));
  };

  const canDrop = (item: any, monitor: DropTargetMonitor) => props.validDrop;
  const [{ isOver }, drop] = useDrop({
    accept: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    drop: onDrop,
    canDrop: canDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div ref={drop} sx={styles.tileCss(props.colour === "green", isOver)}>
      {props.children}
    </div>
  );
};
