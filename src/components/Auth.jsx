import axios from "axios";


const Auth = {

    isAuthenticated: false,
    authUser:"",

    async register(inputUsername, inputPassword) {
      await  axios.post("https://git.heroku.com/my-check-list-server.git/register", {
            username: inputUsername,
            password: inputPassword
        }, { withCredentials: true }).then(res => {
            console.log("User Registed!");
            console.log(res.data);
            this.isAuthenticated = res.data.isAuth;
            this.authUser = res.data.user;

        });

        return Promise.resolve(this.isAuthenticated);
    },

    async authenticate(inputUsername, inputPassword) {

        await axios.post("https://git.heroku.com/my-check-list-server.git/login", {
            username: inputUsername,
            password: inputPassword
        }, { withCredentials: true }).then(res => {
            console.log("Login is working!");
            console.log(res.data);
            this.isAuthenticated = res.data.isAuth;
            this.authUser = res.data.user;
        });

        return Promise.resolve(this.isAuthenticated);

    },

    async logout() {

        await axios.get("https://git.heroku.com/my-check-list-server.git/logout", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser="";

            });

        return Promise.resolve(this.isAuthenticated);

    },

    async getAuth() {
        await axios.get("https://git.heroku.com/my-check-list-server.git/secrets", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser = res.data.user;
            });

        return Promise.resolve(this.isAuthenticated);

    },
    async getAuthUser() {
        await axios.get("https://git.heroku.com/my-check-list-server.git/secrets", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser = res.data.user;
            });

        return Promise.resolve(this.authUser);

    },
}


export default Auth;

