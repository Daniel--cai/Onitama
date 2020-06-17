import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider, ReactReduxContext } from "react-redux";
import { mockState } from "./mockState";
import { createRootReducer } from "../index";
import { createBrowserHistory } from "history";
import { State } from "../index";
import { ConnectedRouter } from "connected-react-router";
const history = createBrowserHistory();
function render(
  ui: JSX.Element,
  {
    initialState: State = mockState,
    store = createStore(createRootReducer(history), mockState),
    ...renderOptions
  } = {}
) {
  function Wrapper(props: any) {
    return (
      <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
          {props.children}
        </ConnectedRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
