import { Action } from "redux";

export type Actions = "movePiece";

export interface AnyAction<T> extends Action<T> {
  [extraProps: string]: any;
}
