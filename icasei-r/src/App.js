import { CssBaseline } from "@material-ui/core";
import React from "react";
import GlobalStateContext from './global/GobalStateContext'
import Router from "./Routes/Router";

const App = () => {
  return (
    
    <GlobalStateContext>
      <CssBaseline/>
      <Router />
    </GlobalStateContext>
   
  );
};

export default App;
