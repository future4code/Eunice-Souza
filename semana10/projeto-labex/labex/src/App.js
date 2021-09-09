import React from "react";
import { useHistory, useParams } from "react-router-dom";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
// import styled from "styled-components";
// import React from "router"


export default App = () => {
  const history = useHistory()

  const handleHistory = HomePage = () =>{
    history.push(login)
  }

      
  
    
  
  return<div>viagens</div>
  
  
  return (

    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <HomePage />
        </Route>

        <Route exact path={'/admin'}>
          <AdminHomePage />
        </Route>

        <Route exact path={'/login'}>
          <LoginPage />
        </Route>

        <Route exact path={'/aplication-form'}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={'/create-trip'}>
          <CreateTripPage />
        </Route>

        <Route exact path={'/trip-detals'}>
          <TripDetailsPage />
        </Route>

        <Route exact path={'/list-trip'}>
          <ListTripsPage />
        </Route>

      </Switch>
    </BrowserRouter>

  )
}

// export default Apps;