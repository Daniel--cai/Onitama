import React from "react";
import { RouteComponentProps } from "react-router";
import "./Lobby.scss";
import { Board } from "../components/board";

import { State } from "../store";
import { useSelector } from "react-redux";
import { CardList } from "../components/card-list";

export const Lobby: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const pieces = useSelector((store: State) => store.pieces);
  const card = useSelector((store: State) => store.card);
  return (
    <>
      <CardList cards={card.red} player={false} />
      <Board pieces={pieces.collection} />
      <CardList cards={card.blue} neutral={card.neutral} player={true} />
    </>
  );
};
