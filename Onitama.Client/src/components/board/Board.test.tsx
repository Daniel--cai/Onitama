import * as React from "react";
import { render } from "../../store/test/testutils";
import { Board } from "./Board";
import * as ReactRedux from "react-redux";
import { createStore } from "redux";
import { mockState } from "../../store/test/mockState";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn((fn) => fn()),
}));

test("renders ", () => {
  render(<Board pieces={[]} />);
});
