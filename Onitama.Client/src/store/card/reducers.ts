import { CardState, SELECT_CARD, CardActionTypes, PLAY_CARD } from "./types";

export const initialState: CardState = {
  selected: -1,
  blue: [4, 6],
  red: [7, 8],
  neutral: 10
};

export function cardReducer(
  state: CardState = initialState,
  action: CardActionTypes
): CardState {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selected: action.payload };

    case PLAY_CARD:
      const blue = state.blue
        .filter(c => c !== state.selected)
        .concat([state.neutral]);
      return { ...state, blue, neutral: state.selected, selected: -1 };

    default:
      return state;
  }
}
