import { GameActionTypes, PLAY_TURN, GameState } from "./types";
import { Colour } from "../pieces/models";

export function playTurn(
  id: number,
  x: number,
  y: number,
  card: number
): GameActionTypes {
  return {
    type: PLAY_TURN,
    payload: { id, x, y, card },
  };
}

export function isPlayerTurn(state: GameState) {
  return state.turn % 2 === Colour.Blue;
}
