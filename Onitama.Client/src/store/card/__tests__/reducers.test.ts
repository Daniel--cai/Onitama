import { Cards } from "../../../constants/Card";
import { cardReducer } from "../reducers";
import { CardActionTypes, SELECT_CARD } from "../types";

describe("card reducer", () => {
  it("should handle selectCard", () => {
    const expectedAction: CardActionTypes = {
      type: SELECT_CARD,
      payload: Cards[0]
    };
    expect(cardReducer([], expectedAction)).toEqual(Cards[0]);
  });
});
