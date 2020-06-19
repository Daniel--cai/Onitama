import { Move } from "./models";
import { GameState } from "./types";
import { Colour } from "../pieces/models";

export function initialise(): GameState {
  const history: Move[] = [];
  return { history, turn: 0, player: Colour.Black, players: [], loaded: false };
}
