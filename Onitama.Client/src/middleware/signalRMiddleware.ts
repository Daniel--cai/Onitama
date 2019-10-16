import { State } from "../store";
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from "redux";
import * as signalR from "@aspnet/signalr";
import { push } from "connected-react-router";

// interface SignalrHubConnection extends Omit<signalR.HubConnection, "on"> {
//   on: (action: Actions, dispatch: (data: any) => void) => void;
// }

const startSignalRConnection = (connection: signalR.HubConnection) =>
  connection
    .start()
    .then(() => console.info("SignalR Connected"))
    .catch(err => console.error("SignalR Connection Error: ", err));

export const signalRMiddleware: Middleware<Dispatch> = ({
  dispatch,
  getState
}: MiddlewareAPI<any, State>) => next => async (action: AnyAction) => {
  return next(action);
};
