import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createBrowserHistory, History } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { piecesReducer } from "./pieces/reducers";
import { cardReducer } from "./card/reducers";
import { gameReducer } from "./game/reducers";
import { playerReducer } from "./player/reducers";

export const history = createBrowserHistory();
const rootReducer = combineReducers({
  pieces: piecesReducer,
  card: cardReducer,
  game: gameReducer,
  player: playerReducer,
  router: connectRouter(history),
});

export const createRootReducer = (history: History) => rootReducer;
export type State = Omit<ReturnType<typeof rootReducer>, "router">;

export function configureStore(
  initialState?: State,
  history: History<any> = createBrowserHistory()
) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(thunkMiddleware))
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./", () => store.replaceReducer(rootReducer));
  }

  return store;
}

// export const initialState: State = {
//   pieces: initialise(),
//   card: -1,
//   router: {
//     location: {
//       pathname: "",
//       search: "",
//       state: "",
//       hash: "",
//       key: undefined
//     },
//     action: "REPLACE"
//   }
// };
