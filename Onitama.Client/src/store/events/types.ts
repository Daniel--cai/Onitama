import { Game } from "../game/models";

import { Scoreboard } from "./models";

export const CONNECTED = "connected";
export const CODE_UPDATED = "codeUpdated";
export const GAME_FETCHED = "gameFetched";
export const LOBBY_JOINED = "lobbyJoined";
export const LOBBY_LEFT = "lobbyLeft";
export const GAME_STARTED = "gameStarted";
export const ROUND_FINISHED = "roundFinished";

export interface ConnectedEvent {
  type: typeof CONNECTED;
  payload: {
    success: boolean;
  };
}

export interface LobbyJoinedEvent {
  type: typeof LOBBY_JOINED;
  payload: {
    player: string;
  };
}

export interface LobbyLeftEvent {
  type: typeof LOBBY_LEFT;
  payload: {
    player: string;
  };
}

export interface GameStartedEvent {
  type: typeof GAME_STARTED;
  payload: {
    storyTeller: string;
    players: string[];
  };
}

export interface CodeUpdatedEvent {
  type: typeof CODE_UPDATED;
  payload: { code: boolean };
}

export interface RoundFinishedEvent {
  type: typeof ROUND_FINISHED;
}

export interface GameFetchedEvent {
  type: typeof GAME_FETCHED;
  payload: Game;
}

export type EventTypes =
  | ConnectedEvent
  | LobbyJoinedEvent
  | LobbyLeftEvent
  | GameStartedEvent
  | CodeUpdatedEvent
  | RoundFinishedEvent
  | GameFetchedEvent;
