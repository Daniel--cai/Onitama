import React from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { mockState } from "./mockState";
import { State, configureStore } from "../index";
import { createMemoryHistory } from "history";

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): { result: RenderResult; history: any } {
  const AllTheProviders: React.FC = ({ children }) => {
    const store = configureStore(mockState, createMemoryHistory());
    console.log(children);
    console.log("type is -----");
    const component = <Provider store={store}> {children}</Provider>;
    console.log(component.type);
    return <Provider store={store}> {children}</Provider>;
  };

  return {
    result: rtlRender(ui, {
      wrapper: AllTheProviders,
      ...options,
    }),
    history,
  };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
