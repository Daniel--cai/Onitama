import * as React from "react";
import { render } from "../../store/test/testutils";
import Board from "./Board";
import '@testing-library/jest-dom/extend-expect'

test("renders ", () => {
  const component = <Board pieces={[]} />;
  console.log(component);
  console.log('test code ---')
  render(component);
});
