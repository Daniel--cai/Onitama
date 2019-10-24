import * as React from "react";
import { render } from "@testing-library/react";
import { Board } from "./Board";

describe("<Board />", () => {
  it("renders ", () => {
    const { getByText } = render(<Board pieces={[]} />);
  });
});
