import React, { useState } from "react";

import {
    Redirect
} from "react-router-dom";

import Auth from "./Auth";




function Register() {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);
   

    function handleUsernameChange(event) {
        const newValue = event.target.value;
        setInputUsername(newValue);
    }
    function handlePasswordChange(event) {
        const newValue = event.target.value;
        setInputPassword(newValue);
    }

    function handleSubmit() {

      

        Auth.register(inputUsername, inputPassword)
        .then(result => {
            setIsAuth(result);
            console.log(result);
        });
        setInputPassword("");
        setInputUsername("");

    }

    if (isAuth === false) {
        Auth.getAuth().then(result => { setIsAuth(result) });
    }


    return (
        <div>

            {isAuth && <Redirect to="/secrets" />}

            <div className="registerUsername">
                <input
                    onChange={handleUsernameChange}
                    type="text"
                    value={inputUsername}
                    name="username"
                    placeholder="username or email"
                    autoComplete="off"

                /> <p>{inputUsername}</p>
            </div>

            <div className="registerPassword">
                <input
                    onChange={handlePasswordChange}
                    type="password"
                    value={inputPassword}
                    name="password"
                    placeholder="password"
                    autoComplete="off"

                />
            </div>

            <button onClick={handleSubmit}> Register </button>



        </div>
    );
}

export default Register;