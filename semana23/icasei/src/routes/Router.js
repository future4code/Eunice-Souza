// import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ErrorNotFoundPage from "../pages/ErrorNotFoundPage/ErrorNotFoundPage"
import ResultsPage from "../pages/ResultsPage/ResultsPage"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage/HomePage"



const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/error" component={ErrorNotFoundPage} />
        <Route exact path="/details" component={DetailsPage} />
        {/* <Route>
          <div>Pagina não encontrada</div>
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}
export default Router

