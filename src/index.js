import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BugReport from "./views/BugReport/index";
import FeatureRequest from "./views/FeatureRequest/index";
import ProductRating from "./views/ProductRating/index";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/bug-report" component={BugReport} />
      <Route exact path="/feature-request" component={FeatureRequest} />
      <Route exact path="/product-rating" component={ProductRating} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


