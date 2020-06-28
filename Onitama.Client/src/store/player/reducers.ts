import { PlayerActionTypes, PlayerState, CONNECT, JOIN } from "./types";

import { CONNECTED, GAME_FETCHED } from "../events/types";
import { Colour } from "../pieces/models";

export const initialState: PlayerState = {
  name: "",
  code: "",
  connected: false,
  colour: Colour.Blue,
};

export function playerReducer(
  state: PlayerState = initialState,
  action: PlayerActionTypes
): PlayerState {
  switch (action.type) {
    case CONNECTED: {
      return { ...state, connected: true };
    }
    case CONNECT: {
      return { ...state, name: action.name };
    }
    case JOIN: {
      return { ...state, name: state.name, code: action.code };
    }
    case GAME_FETCHED:
      console.log("fetchGame");
      console.log(action.payload.hand);
      return { ...state, colour: Colour.Blue };
    default:
      return state;
  }
}

