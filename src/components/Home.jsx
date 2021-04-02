import React, { useState } from "react";
import { Redirect } from "react-router";
import Auth from "./Auth";


function Home() {



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

        Auth.authenticate(inputUsername, inputPassword)
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
            {isAuth && <Redirect to="https://wonderful-brown-78efce.netlify.app/secrets" />}


            <div className="loginUsername">
                <input
                    onChange={handleUsernameChange}
                    type="text"
                    value={inputUsername}
                    name="username"
                    placeholder="username or email"
                    autoComplete="off"

                />
            </div>

            <div className="loginPassword">
                <input
                    onChange={handlePasswordChange}
                    type="password"
                    value={inputPassword}
                    name="password"
                    placeholder="password"
                    autoComplete="off"

                />
            </div>
            
            <button onClick={handleSubmit}> Login </button>

        </div>


    );


}

export default Home;