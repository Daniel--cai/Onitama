import { CardActionTypes, SELECT_CARD } from "./types";

export function selectCard(message: number[]): CardActionTypes {
  return {
    type: SELECT_CARD,
    payload: message
  };
}
