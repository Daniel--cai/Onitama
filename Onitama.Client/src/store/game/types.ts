import { Move, Player } from "./models";
import { Colour } from "../pieces/models";

export const PLAY_TURN = "PLAY_TURN";

export interface GameState {
  history: Move[];
  turn: number;
  player: Colour;
  players: Player[];
  loaded: boolean;
}

interface PlayTurnAction {
  type: typeof PLAY_TURN;
  payload: { id: number; x: number; y: number; card: number };
}

export type GameActionTypes = PlayTurnAction;
