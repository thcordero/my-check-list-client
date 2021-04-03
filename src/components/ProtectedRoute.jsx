import React, { useState } from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

import Auth from "./Auth";



function ProtectedRoute({ component: Component, ...rest }) {
    const [isAuth, setIsAuth]=useState(false);
    
    if (isAuth === false) {
        Auth.getAuth().then(result => { setIsAuth(result) });
    }
    
    return <Route {...rest} render={props => isAuth ? (<Component {...props} />) :
        <Redirect to="/" />} />

}

export default ProtectedRoute;