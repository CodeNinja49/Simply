import React from "react";
import { Router } from "react-router-dom";
import "./App.scss";

import getRoute from "route/route";
import history from "utils/history";
import { useAuth0 } from "./react-auth0-spa";

import Loading from "components/Loading/Loading";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return <Loading />;
  }
  const routes = getRoute();
  return (
    <Router history={history}>
      <div className="App">{routes}</div>
    </Router>
  );
}

export default App;
