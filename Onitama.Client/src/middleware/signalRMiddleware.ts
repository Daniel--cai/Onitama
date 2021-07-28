import { State } from "../store";
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from "redux";
import * as signalR from "@aspnet/signalr";
import { lobbyJoined, lobbyLeft, gameStarted, connected } from "../store/events/actions";

// interface SignalrHubConnection extends Omit<signalR.HubConnection, "on"> {
//   on: (action: Actions, dispatch: (data: any) => void) => void;
// }

const startSignalRConnection = (connection: signalR.HubConnection) =>
  connection
    .start()
    .then(() => console.info("SignalR Connected"))
    .catch((err) => console.error("SignalR Connection Error: ", err));

export const signalRMiddleware: Middleware<Dispatch> = ({
  dispatch,
  getState,
}: MiddlewareAPI<any, State>) => (next) => async (action: AnyAction) => {
  if (!getState().player.connected && action.type === "connect") {
    const name = action.name;
    const code = action.code;
    const screen = action.screen;
    const connectionHub = `${process.env.API_HOST}/app/lobbyevents?name=${name}&code=${code}&screen=${screen}`;
    const connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
      .withUrl(connectionHub)
      .build();
    await startSignalRConnection(connection);

    dispatch(connected({ success: true }));
    // dispatch(push(`/lobby/${code}`));
    // dispatch(fetchGame(code));

    connection.on("lobbyJoined", (data) => dispatch(lobbyJoined(data)));
    connection.on("lobbyLeft", (data) => dispatch(lobbyLeft(data)));
    connection.on("lobbyStarted", (data) => dispatch(gameStarted(data)));
  }
  return next(action);
};
