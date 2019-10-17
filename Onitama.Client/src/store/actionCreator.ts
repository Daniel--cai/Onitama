import { Message } from "../client/events";
import { Actions } from "../store/action";

export type ActionCreator<T extends Message> = (
  message: T
) => { type: Actions; payload?: T };

export const movePieceAction: ActionCreator<{
  id: number;
  x: number;
  y: number;
}> = message => ({
  type: "movePiece",
  payload: message
});
