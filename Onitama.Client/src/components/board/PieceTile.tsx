import React, { useEffect } from "react";
import "./Board.scss";
import classnames from "classnames";
import { useDrag } from "react-dnd";
import { PieceType, Colour } from "../../store/pieces/models";
import { useSelector } from "react-redux";
import { State } from "../../store";

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
    ></div>
  );
};
