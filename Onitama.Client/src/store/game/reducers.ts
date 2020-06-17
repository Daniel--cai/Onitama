import { GameActionTypes, GameState, PLAY_TURN } from "./types";
import { initialise } from "./state";
export const initialState = initialise();

export function gameReducer(
  state: GameState = initialState,
  action: GameActionTypes
): GameState {
  switch (action.type) {
    case PLAY_TURN:
      return { ...state, history: [...state.history, { ...action.payload }] };
    default:
      return state;
  }
}
