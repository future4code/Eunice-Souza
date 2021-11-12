import useProtectedPage from "../../hooks/useProtectedPage"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { useHistory } from "react-router-dom";
import UsersPage from ".pages/UsersPage/UsersPage";
import { Button, Typography } from "@material-ui/core";
    

const UsersPage = () => {
    useProtectedPage();

   
    const UsersForms = () => {
      useUnprotectedPage();
      const history = useHistory();
    
      return (
        <MainContainer>
          <UsersContainer>
            <ElementLogin>
              <Typography variant={"h4"}>Users</Typography>
    
              <UsersForms />
            </ElementLogin>
          </UsersContainer>
        </MainContainer>
      );
    };
    
}
export default UsersPage