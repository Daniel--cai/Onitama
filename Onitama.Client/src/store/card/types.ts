export type CardState = number;

export const SELECT_CARD = "SELECT_CARD";

interface SelectCardAction {
  type: typeof SELECT_CARD;
  payload: number;
}

export type CardActionTypes = SelectCardAction;
