import { Actions, AnyAction } from "..";
import { CardDrawn, GameFetched } from "../../client/events";

export function handReducer(
  state: number[] = [],
  action: AnyAction<Actions>
): number[] {
  switch (action.type) {
    default:
      return state;
  }
}
