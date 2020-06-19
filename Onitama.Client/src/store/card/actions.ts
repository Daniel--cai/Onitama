import { CardActionTypes, SELECT_CARD, PLAY_CARD, INITIALISE } from "./types";

export function selectCard(message: number): CardActionTypes {
  return {
    type: SELECT_CARD,
    payload: message,
  };
}

export function playCard(): CardActionTypes {
  return {
    type: PLAY_CARD,
  };
}

export function initialise(config: number[]): CardActionTypes {
  return {
    type: INITIALISE,
    config,
  };
}
