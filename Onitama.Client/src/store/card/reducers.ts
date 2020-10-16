import {
  CardState,
  SELECT_CARD,
  CardActionTypes,
  PLAY_CARD,
  INITIALISE,
} from "./types";

export const initialState: CardState = {
  selected: -1,
  blue: [0, 1],
  red: [2, 3],
  neutral: 4,
};

export function cardReducer(
  state: CardState = initialState,
  action: CardActionTypes
): CardState {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selected: action.payload };
    case INITIALISE: {
      const neutral = action.config[0];
      const blue = action.config.slice(1, 3);
      const red = action.config.slice(3, 5);
      return { ...state, neutral, blue, red };
    }
    case PLAY_CARD: {
      const blue = state.blue
        .filter((c) => c !== state.selected)
        .concat([state.neutral]);
      return { ...state, blue, neutral: state.selected, selected: -1 };
    }
    default:
      return state;
  }
}
