import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import DashBoard from "components/DashBoard/DashBoard";
import Calendar from "components/Calendar/Calendar";

const getRoute = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={DashBoard} />
      <PrivateRoute path="/calendar" exact component={Calendar} />
    </Switch>
  );
};

export default getRoute;
