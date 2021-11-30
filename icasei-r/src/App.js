import { CssBaseline } from "@material-ui/core";
// import GlobalStateContext from "./global/GobalStateContext";
import Router from "./routes/Router";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Router />
    </div>
  );
};

export default App;
