import axios from "axios";


const Auth = {

    isAuthenticated: false,
    authUser:{},
    sessionID:"",

    async register(inputUsername, inputPassword) {
      await  axios.post("https://my-check-list-server.herokuapp.com/register", {
            username: inputUsername,
            password: inputPassword
        }, { withCredentials: true }).then(res => {
            console.log("User Registed!");
            console.log(res.data);
            this.isAuthenticated = res.data.isAuth;
            this.authUser = res.data.user;
            console.log("register");

        });

        return Promise.resolve(this.isAuthenticated);
    },

    async authenticate(inputUsername, inputPassword) {

        await axios.post("https://my-check-list-server.herokuapp.com/login", {
            username: inputUsername,
            password: inputPassword
        }, { withCredentials: true }).then(res => {
            console.log("Login is working!");
            console.log(res.data);
            this.isAuthenticated = res.data.isAuth;
            this.authUser = res.data.user;
            this.sessionID = res.data.sessionID;
            console.log("authenticate");
            console.log(this.sessionID);
        });

        return Promise.resolve(this.isAuthenticated);

    },

    async logout() {

        await axios.get("https://my-check-list-server.herokuapp.com/logout", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser="";
                console.log("logout");

            });

        return Promise.resolve(this.isAuthenticated);

    },

    async getAuth() {
        await axios.post("https://my-check-list-server.herokuapp.com/secrets", {
            loggedID: this.sessionID
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser = res.data.user;
                console.log("getAuth");
                console.log(res.data.sessionID);
            });

        return Promise.resolve(this.isAuthenticated);

    },
    async getAuthUser() {
        await axios.get("https://my-check-list-server.herokuapp.com/secrets", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser = res.data.user;
                console.log("getAuthUser");
            });

        return Promise.resolve(this.authUser);

    },
}


export default Auth;

