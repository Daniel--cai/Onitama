import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import { Cards } from "../../../constants/Card";
import { initialState } from "../reducers";
import { selectCard } from "../actions";
import { SELECT_CARD, CardActionTypes } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("selectCard should create an action to update selected", () => {
    store.dispatch(selectCard(1));

    const expectedAction: CardActionTypes = {
      type: SELECT_CARD,
      payload: 1
    };

    expect(store.getActions()[0].type).toEqual(expectedAction.type);
    expect(store.getActions()[0].payload).toEqual(expectedAction.payload);
  });
});
