import { createStore, applyMiddleware, compose } from "redux";
import { signalRMiddleware } from "../middleware/signalRMiddleware";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducer";
import { routerMiddleware, RouterState } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { GameState } from "../constants/GameState";
import { Vote, Scoreboard } from "../client/events";

import { Tile, PieceType, Colour, Piece } from "../model";

export const getIndex = (x: number, y: number) => {
  return y + x * 5;
};

export const getPosition = (index: number) => {
  const x = index % 5;
  const y = Math.floor(index / 5);
  return [x, y];
};

let pieceCounter = 0;
const initPiece = (
  x: number,
  y: number,
  colour: Colour,
  type: PieceType
): Piece => {
  return { id: pieceCounter++, active: true, x, y, colour, type };
};

const initialBoard = () => {
  const pieces: Piece[] = [
    initPiece(0, 0, Colour.White, PieceType.Pupil),
    initPiece(1, 0, Colour.White, PieceType.Pupil),
    initPiece(2, 0, Colour.White, PieceType.Master),
    initPiece(3, 0, Colour.White, PieceType.Pupil),
    initPiece(4, 0, Colour.White, PieceType.Pupil),
    initPiece(0, 4, Colour.Black, PieceType.Pupil),
    initPiece(1, 4, Colour.Black, PieceType.Pupil),
    initPiece(2, 4, Colour.Black, PieceType.Master),
    initPiece(3, 4, Colour.Black, PieceType.Pupil),
    initPiece(4, 4, Colour.Black, PieceType.Pupil)
  ];
  return pieces;
};

export const initialState: State = {
  pieces: initialBoard(),
  router: {
    location: {
      pathname: "",
      search: "",
      state: "",
      hash: "",
      key: undefined
    },
    action: "REPLACE"
  }
};

export interface State {
  pieces: Piece[];
  router: RouterState;
}

export const history = createBrowserHistory();

export function configureStore() {
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer", () =>
      store.replaceReducer(createRootReducer(history))
    );
  }

  return store;
}
