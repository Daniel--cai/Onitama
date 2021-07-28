import {
  EventTypes,
  LOBBY_JOINED,
  LOBBY_LEFT,
  CONNECTED,
  CODE_UPDATED,
  GAME_FETCHED,
} from "../events/types";
import { Dispatch } from "redux";
import { Apiclient } from "../../api";
import { State } from "..";
import { push } from "connected-react-router";

// export function roundFinished(payload: any): EventTypes {
//   return {
//     type: ROUND_FINISHED,
//     payload
//   };
// }

export function lobbyJoined(payload: any): EventTypes {
  return {
    type: LOBBY_JOINED,
    payload,
  };
}

export function lobbyLeft(payload: any): EventTypes {
  return {
    type: LOBBY_LEFT,
    payload,
  };
}

export function connected(payload: any): EventTypes {
  return {
    type: CONNECTED,
    payload,
  };
}

export function codeUpdated(payload: any): EventTypes {
  return {
    type: CODE_UPDATED,
    payload,
  };
}

export function gameStarted(payload: any) {
  return (dispatch: Dispatch, getState: () => State) => {
    const player = getState().player;
    if (player.name === "SCREEN") {
      dispatch(push(`/screen/${getState().player.code}/game`));
    } else {
      dispatch(push(`/game/${getState().player.code}`));
    }
    return dispatch({ type: "gameStarted", payload });
  };
}

export function fetchGame(code: string) {
  return async (dispatch: Dispatch) => {
    const response = await Apiclient.get(`/lobby?code=${code}`);
    console.log(response.data);
    dispatch({
      type: GAME_FETCHED,
      payload: response.data,
    });
  };
}
