import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { State } from "../store";
import { piecesReducer } from "./piecesReducer";

const createRootReducer = (history: any) =>
  combineReducers<State>({
    pieces: piecesReducer,
    router: connectRouter(history)
  });
export default createRootReducer;
