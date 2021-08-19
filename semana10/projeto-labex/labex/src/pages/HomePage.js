import React from "react";
import { useHistory, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";


export default HomePage = () => {
    const history = useHistory('')

    const goToTripList = () => {
        History.push('./list-trips')
    }

    const goToAdminLoginPage = () => {
        history.push('admin-login')
    }

   return (
       <div>
            <button onClick={goToTripList}>Ir viagens</button>
            <button onClick={goToAdminLoginPage}>Admin</button>
        </div>
    )
}

// export default HomePage;