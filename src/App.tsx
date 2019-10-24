import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import history from "./routes/history";
import Home from "./views/Home";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={store.getState().theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
