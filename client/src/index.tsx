import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import * as serviceWorker from "./serviceWorker";
import "./styles/vendor/bootstrap.min.css";
import "./styles/sass/themes/gogo.light.blueyale.scss";
import { Brand, Home } from "./sections";
import { AppLayout } from "components/common";
import { Provider } from "react-redux";
import store from "lib/redux/store";
const client = new ApolloClient({
  uri: "/api",
  request: async (operation) => {},
});

const App = () => {
  return (
    <Router>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <AppLayout>
              <Route exact path="/brand/:id">
                <Brand />
              </Route>
            </AppLayout>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

render(
  <ApolloProvider client={client as any}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
