import { GameState } from "./types";
export interface Move {
  id: number;
  x: number;
  y: number;
  card: number;
}

export interface Game {
  players: Player[];
  roundNumber: number;
  gameState: GameState;
  currentStoryTeller: string;
  cards: number[];
  hand: number[];
}

export interface Player {
  name: string;
}

