import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { piecesReducer } from "./pieces/reducers";
import { cardReducer } from "./card/reducers";
import { gameReducer } from "./game/reducers";

export const history = createBrowserHistory();
const rootReducer = combineReducers({
  pieces: piecesReducer,
  card: cardReducer,
  game: gameReducer,
  router: connectRouter(history),
});

export const createRootReducer = (history: any) => rootReducer;
export type State = ReturnType<typeof rootReducer>;

export function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./", () =>
      store.replaceReducer(createRootReducer(history))
    );
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
