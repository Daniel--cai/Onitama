import * as React from "react";
import {
  render,
  fireEvent,
  getAllByAltText,
  getByTestId,
  getByLabelText,
  getByText
} from "@testing-library/react";
import { CardList } from "./CardList";
import { Cards } from "../../constants/Card";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import { selectCard } from "../../store/card/actions";
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
