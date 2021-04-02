import React, { useState } from "react";

import { Redirect } from "react-router";
import Auth from "./Auth";
import LoggedUser from "./LoggedUser";



function Secrets() {
    const [isLogout, setIsLogout] = useState(true);

    function handleClick() {

       Auth.logout().then(result => {
        setIsLogout(result);
        console.log(result);
    });

    }

    return (
        <div>
            <LoggedUser />
            <button onClick={handleClick}> Logout </button>
            {!isLogout && <Redirect to="https://wonderful-brown-78efce.netlify.app/" />}
        
        </div>
    );
}

export default Secrets;