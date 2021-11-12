import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Button, Typography } from "@material-ui/core";

import {
  ElementLogin,
  ImageSidebar,
  LoginContainer,
  MainContainer,
} from "./styled";

const LoginPage = () => {
  useUnprotectedPage();
  const history = useHistory();

  return (
    <MainContainer>
      <LoginContainer>
        <ElementLogin>
          <Typography variant={"h4"}>Login</Typography>

          <LoginForm />
        </ElementLogin>
      </LoginContainer>
    </MainContainer>
  );
};

export default LoginPage;
