import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import history from "./routes/history";
import Countries from "./views/Countries";
import Header from "./components/Header";
import ViewCountry from "./views/ViewCountry";

const App = () => {
  document.body.style.backgroundColor = store.getState().theme.secondaryColor;
  return (
    <Provider store={store}>
      <ThemeProvider theme={store.getState().theme}>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={Countries} />
            <Route exact path="/Country/:countryId?" component={ViewCountry} />
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
