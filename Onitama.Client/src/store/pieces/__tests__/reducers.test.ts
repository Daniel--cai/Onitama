import { Cards } from "../../../constants/Card";
import { piecesReducer } from "../reducers";
import { PiecesActionTypes, MOVE_PIECE } from "../types";

describe("pieces reducer", () => {
  it("should handle MOVE_PIECE", () => {
    const expectedAction: PiecesActionTypes = {
      type: MOVE_PIECE,
      payload: { id: 1, x: 2, y: 3 }
    };
    expect(
      piecesReducer({ collection: [], current: -1 }, expectedAction)
    ).toEqual({
      pieces: Cards[0],
      piece: -1
    });
  });
});
