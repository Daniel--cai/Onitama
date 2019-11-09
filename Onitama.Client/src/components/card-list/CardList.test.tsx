import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  getByText
} from "@testing-library/react";
import { CardList } from "./CardList";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";

const mockStore = configureMockStore();

describe("<CardList />", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  beforeEach(() => {
    store = mockStore({ card: [] });
  });

  it("renders welcome message", () => {
    const { getByText } = render(<CardList />);
  });

  it("should make card active when clicked", () => {
    const wrapper = render(<CardList />);
    wrapper.findAllByText("li button");
    fireEvent.click(getByText("1"));
    const elem = getByTestId("item");
    expect(elem.classList[0]).toBe("selected");
  });
});
