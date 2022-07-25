import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Layout from "./components/Common/Layout";
import ApiKeys from "./pages/api-keys/ApiKeys";
import Documentation from "./pages/documentation";
import Authentication from "./pages/documentation/authentication";
import Webhooks from "./pages/webhooks/Webhooks";

export default function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            {<Redirect to="/documenation/introduction/api-environment" />}
          </Route>
          <Route path="/documenation">
            <Documentation />
          </Route>
          <Route path="/api-keys">  
            api
          </Route>
          <Route path="/webhooks">
            <Webhooks />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}
