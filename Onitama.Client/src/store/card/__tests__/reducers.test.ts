import { Cards } from "../../../constants/Card";
import { cardReducer, initialState } from "../reducers";
import { CardActionTypes, SELECT_CARD } from "../types";

describe("card reducer", () => {
  it("should handle selectCard", () => {
    const expectedAction: CardActionTypes = {
      type: SELECT_CARD,
      payload: 1,
    };

    expect(cardReducer(initialState, expectedAction).selected).toEqual(1);
  });
});
