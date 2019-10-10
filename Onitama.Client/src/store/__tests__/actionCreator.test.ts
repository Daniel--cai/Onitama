import * as actions from "../actionCreator";
import { GameFetched } from "../../client/events";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { GameState } from "../../constants/GameState";
import { initialState } from "../store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("events", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("fetchGameAction should create an action to fetch data and hydrate store", async () => {
    const expectedAction = {
      type: "gameStarted",
      payload: {}
    };

    const mockResponse: GameFetched = {
      players: [{ name: "player1", score: 1 }],
      roundNumber: 1,
      gameState: GameState.Voting,
      currentStoryTeller: "player1",
      storyCard: 1,
      story: "story",
      cards: [1, 2, 3],
      votes: [{ player: "bob", card: 1 }],
      hand: [4, 5, 6, 7, 8, 9]
    };

    fetchMock.getOnce("/api/lobby?code=1234", {
      body: mockResponse,
      headers: { "content-type": "application/json" }
    });

    const store = mockStore(initialState);
    await store.dispatch(actions.fetchGameAction("1234"));
    const returnedActions = store.getActions();
    expect(store.getActions()).toEqual(expectedAction);
  });
});
