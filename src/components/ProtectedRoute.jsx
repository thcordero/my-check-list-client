import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

import Auth from "./Auth";



 function ProtectedRoute({ component: Component, ...rest }) {
    

    return <Route {...rest} render={props => Auth.isAuthenticated ? (<Component {...props}/>) :
        <Redirect to="https://wonderful-brown-78efce.netlify.app/" />} />

}

export default ProtectedRoute;