import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import { push } from "connected-react-router";
import { GameState } from "../constants/GameState";

export const Game: React.FC<RouteComponentProps<{ code: string }>> = props => {
  const dispatch = useDispatch();
  return <></>;
};
