import { State } from "..";
import { initialise } from "../pieces/state";
import { initialState as cardInitialState } from "../card/reducers";
import { initialState as gameInitialState } from "../game/reducers";
export const mockState: State = {
  pieces: initialise(),
  card: cardInitialState,
  game: gameInitialState,
  router: {
    location: {
      pathname: "",
      search: "",
      state: "",
      hash: "",
      key: undefined,
    },
    action: "REPLACE",
  },
};
