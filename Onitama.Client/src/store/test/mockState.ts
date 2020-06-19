import { State } from "..";
import { initialise } from "../pieces/state";
import { initialState as cardInitialState } from "../card/reducers";
import { initialState as gameInitialState } from "../game/reducers";
import { initialState as playerInitialState } from "../player/reducers";

export const mockState: State = {
  pieces: initialise(),
  card: cardInitialState,
  game: gameInitialState,
  player: playerInitialState,
};
