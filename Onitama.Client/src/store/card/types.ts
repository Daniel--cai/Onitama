export interface CardState {
  selected: number;
  blue: number[];
  red: number[];
  neutral: number;
}

export const SELECT_CARD = "SELECT_CARD";
export const PLAY_CARD = "PLAY_CARD";
export const INITIALISE = "INITIALISE";

interface SelectCardAction {
  type: typeof SELECT_CARD;
  payload: number;
}

interface PlayCardAction {
  type: typeof PLAY_CARD;
}

interface InitialiseAction {
  type: typeof INITIALISE;
  config: number[];
}

export type CardActionTypes =
  | SelectCardAction
  | PlayCardAction
  | InitialiseAction;
