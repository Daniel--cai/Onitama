import { GameFetched } from "../../client/events";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import { GameState } from "../../constants/GameState";
import { Cards } from "../../constants/Card";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  // let store: MockStoreEnhanced<unknown, {}>;
  // beforeEach(() => {
  //   store = mockStore(initialState);
  // });
  // it("selectCard should create an action to update selected", () => {
  //   store.dispatch(actions.selectCardAction({ card: Cards[0] }));
  //   const expectedAction = {
  //     type: "selectCard",
  //     payload: { card: Cards[0] }
  //   };
  //   expect(store.getActions()[0].type).toEqual(expectedAction.type);
  //   expect(store.getActions()[0].payload).toEqual(expectedAction.payload);
  // });
});
