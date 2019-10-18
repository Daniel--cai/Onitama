import React from "react";
import { RouteComponentProps } from "react-router";
// import Axios from "axios";
import "./Lobby.scss";
import { Board } from "../components/board";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { State } from "../store";
import { useSelector } from "react-redux";
import { CardList } from "../components/card-list";

export const Lobby: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const pieces = useSelector((store: State) => store.pieces);
  return (
    <DndProvider backend={HTML5Backend}>
      <Board pieces={pieces} />
      <CardList />
    </DndProvider>
  );
};
