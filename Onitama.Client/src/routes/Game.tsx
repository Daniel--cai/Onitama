import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Board } from "../components/board";

import { State } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { CardList } from "../components/card-list";
import { Cards } from "../constants/Card";
import { initialise } from "../store/card/actions";

export const initialiseCards = () => {
  const shuffled = Array.from(Array(Cards.length - 1).keys()).sort(
    () => 0.5 - Math.random()
  );
  return shuffled.slice(0, 5);
};

export const Game: React.FC<RouteComponentProps<{ code: string }>> = (
  props
) => {
  const pieces = useSelector((store: State) => store.pieces);
  const card = useSelector((store: State) => store.card);
  const dispatch = useDispatch();
  useEffect(() => {
    const config = initialiseCards();
    dispatch(initialise([0, 1, 2, 3, 4]));
  }, []);
  return (
    <>
      <CardList cards={card.red} player={false} />
      <Board pieces={pieces.collection} />
      <CardList cards={card.blue} neutral={card.neutral} player={true} />
    </>
  );
};
