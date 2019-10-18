import { CardState, SELECT_CARD, CardActionTypes } from "./types";

const initialState: CardState = [];

export function cardReducer(
  state: CardState = initialState,
  action: CardActionTypes
): number[] {
  switch (action.type) {
    case SELECT_CARD:
      return action.payload;
    default:
      return state;
  }
}
