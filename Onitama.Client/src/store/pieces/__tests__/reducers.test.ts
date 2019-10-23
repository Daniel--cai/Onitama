import { Cards } from "../../../constants/Card";
import { piecesReducer } from "../reducers";
import { PiecesActionTypes, MOVE_PIECE, PiecesState } from "../types";
import { Piece } from "../models";

describe("pieces reducer", () => {
  it("should handle MOVE_PIECE", () => {
    const expectedAction: PiecesActionTypes = {
      type: MOVE_PIECE,
      payload: { id: 1, x: 2, y: 3 }
    };
    expect(
      piecesReducer(
        { collection: [<Piece>{ id: 1, x: 1, y: 1 }], current: undefined },
        expectedAction
      )
    ).toEqual(<PiecesState>{
      collection: [{ id: 1, x: 2, y: 3 }],
      current: undefined
    });
  });
});
