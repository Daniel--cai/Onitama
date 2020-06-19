import { PlayerActionTypes, CONNECT, JOIN } from "./types";

export function connect(name: string): PlayerActionTypes {
  return {
    type: CONNECT,
    name,
  };
}

export function join(code: string): PlayerActionTypes {
  return {
    type: JOIN,
    code,
  };
}
