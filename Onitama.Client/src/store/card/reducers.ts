import { CardState, SELECT_CARD, CardActionTypes, PLAY_CARD } from "./types";

const initialState: CardState = {
  selected: -1,
  blue: [1, 2],
  red: [3, 4],
  neutral: 5
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
