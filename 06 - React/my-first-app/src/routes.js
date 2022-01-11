import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlanetsScreen from "./screens/planets";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PlanetsScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
