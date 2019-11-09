import { CardActionTypes, SELECT_CARD, PLAY_CARD } from "./types";

export function selectCard(message: number): CardActionTypes {
  return {
    type: SELECT_CARD,
    payload: message
  };
}

export function playCard(message: number): CardActionTypes {
  return {
    type: PLAY_CARD,
    payload: message
  };
}
