import {
  LobbyJoinedEvent,
  LobbyLeftEvent,
  ConnectedEvent,
  GameFetchedEvent,
} from "../events/types";
import { Colour } from "../pieces/models";
export const CONNECT = "connect";
export const JOIN = "join";

export interface PlayerState {
  name: string;
  code: string;
  connected: boolean;
  colour: Colour;
}

export interface ConnectAction {
  type: typeof CONNECT;
  name: string;
}
export interface JoinAction {
  type: typeof JOIN;
  code: string;
}

export type PlayerActionTypes =
  | ConnectAction
  | JoinAction
  | ConnectedEvent
  | LobbyJoinedEvent
  | LobbyLeftEvent
  | GameFetchedEvent;
