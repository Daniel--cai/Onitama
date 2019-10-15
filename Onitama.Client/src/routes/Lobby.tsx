import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import Axios from "axios";
import "./Lobby.scss";
import { Board } from "../components/board";

export const Lobby: React.FC<RouteComponentProps<{ code: string }>> = props => {
  return <Board tiles={[]}></Board>;
};
