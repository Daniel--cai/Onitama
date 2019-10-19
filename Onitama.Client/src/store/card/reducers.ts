import { CardState, SELECT_CARD, CardActionTypes } from "./types";

const initialState: CardState = -1;

export function cardReducer(
  state: CardState = initialState,
  action: CardActionTypes
): CardState {
  switch (action.type) {
    case SELECT_CARD:
      return action.payload;

    default:
      return state;
  }
}
