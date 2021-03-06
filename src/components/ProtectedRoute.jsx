import React, { useState } from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

import Auth from "./Auth";



function ProtectedRoute({ component: Component, ...rest }) {

    if (!Auth.isAuthenticated) {
        Auth.getAuth();
    }

    return <Route {...rest} render={props => Auth.isAuthenticated ? (<Component {...props} />) :
        <Redirect to="/" />} />

}

export default ProtectedRoute;