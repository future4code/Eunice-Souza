import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ResultsPage from "../pages/Results/ResultsPage";
import ResultsNotFoundPage from "../pages/ErrorNotFoundPage/ResultsNotFoundPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/errorNotFound" component={ResultsNotFoundPage} />
        <Route exact path="/details" component={DetailsPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router
