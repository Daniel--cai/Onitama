export interface CardState {
  selected: number;
  blue: number[];
  red: number[];
  neutral: number;
}

export const SELECT_CARD = "SELECT_CARD";
export const PLAY_CARD = "PLAY_CARD";

interface SelectCardAction {
  type: typeof SELECT_CARD;
  payload: number;
}

interface PlayCardAction {
  type: typeof PLAY_CARD;
  payload: number;
}

export type CardActionTypes = SelectCardAction | PlayCardAction;
