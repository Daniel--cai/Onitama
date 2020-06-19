import React from "react";
import {
  render,
} from "../../store/test/testutils";
import CardList from "./CardList";
import '@testing-library/jest-dom/extend-expect'

const defaultProps = () => ({
  cards: [],
  neutral: 0,
  player: true,
});

describe("<CardList/>", () => {
  test("renders ", () => {
    render(<CardList {...defaultProps()} />);
  });

  it("renders welcome message", () => {
    const result = render(<CardList {...defaultProps()} />);
    
  });

  // it("should make card active when clicked", () => {
  //   const wrapper = render(<CardList {...defaultProps()} />);
  //   wrapper.findAllByText("li button");
  //   fireEvent.click(getByText("1"));
  //   const elem = getByTestId("item");
  //   expect(elem.classList[0]).toBe("selected");
  // });
});
