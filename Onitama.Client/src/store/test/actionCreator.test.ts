import { GameFetched } from "../../client/events";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import { GameState } from "../../constants/GameState";
import { Cards } from "../../constants/Card";
import { mockState } from "./mockState";
import * as actions from "../card/actions";
import { CardActionTypes } from "../card/types";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  beforeEach(() => {
    store = mockStore(mockState);
  });
  it("selectCard should create an action to update selected", () => {
    store.dispatch(actions.selectCard(1));
    const expectedAction: CardActionTypes = {
      type: "SELECT_CARD",
      payload: 1,
    };
    expect(store.getActions()[0].type).toEqual(expectedAction.type);
    expect(store.getActions()[0].payload).toEqual(expectedAction.payload);
  });
});
