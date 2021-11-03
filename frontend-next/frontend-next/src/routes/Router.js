import { Switch, Route, BrowserRouter } from "react-router-dom";

// Pages
import LoginPage from "../pages/LoginPage/LoginPage";
import UsersPage from "../pages/UsersPage/UsersPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UsersPage} />

        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
