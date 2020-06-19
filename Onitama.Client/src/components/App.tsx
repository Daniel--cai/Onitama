import React from "react";
import { Lobby, Game } from "../routes";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

const App: React.FC<any> = ({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <DndProvider backend={HTML5Backend}>
          {/* <BreakpointProvider> */}
          <div className="app">
            <Route exact path="/" component={Lobby} />
            <DefaultLayout exact path="/lobby/:code" component={Lobby} />
            <DefaultLayout exact path="/game/:code" component={Game} />
          </div>
          {/* </BreakpointProvider> */}
        </DndProvider>
      </ConnectedRouter>
    </ThemeProvider>
  );
};

const DefaultLayout: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Component {...matchProps} />
        </>
      )}
    />
  );
};
export default App;
