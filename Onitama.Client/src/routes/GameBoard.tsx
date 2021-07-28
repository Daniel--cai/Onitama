import React, { useEffect } from "react";
import { Board } from "../components/dixit/board";

import { State } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { CardList } from "../components/dixit/card-list";
import { Cards } from "../constants/Card";
import { initialise } from "../store/card/actions";
import { Flex } from "theme-ui";

export const initialiseCards = () => {
  const shuffled = Array.from(Array(Cards.length - 1).keys()).sort(
    () => 0.5 - Math.random()
  );
  return shuffled.slice(0, 5);
};

export const GameBoard: React.FC = (props) => {
  const pieces = useSelector((store: State) => store.pieces);
  const card = useSelector((store: State) => store.card);
  const dispatch = useDispatch();
  useEffect(() => {
    const config = initialiseCards();
    dispatch(initialise(config));
  }, [dispatch]);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: "medium",
        m: "xl",
        boxShadow: "elevation-25",
        margin: "auto",
      }}
    >
      <CardList cards={card.red} player={false} />
      <Board pieces={pieces.collection} />
      <CardList cards={card.blue} neutral={card.neutral} player={true} />
    </Flex>
  );
};
