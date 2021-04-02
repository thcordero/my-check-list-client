import axios from "axios";


const Auth = {

    isAuthenticated: false,
    authUser:"",

    async register(inputUsername, inputPassword) {
      await  axios.post("http://localhost:5000/register", {
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

        await axios.post("http://localhost:5000/login", {
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

        await axios.get("http://localhost:5000/logout", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser="";

            });

        return Promise.resolve(this.isAuthenticated);

    },

    async getAuth() {
        await axios.get("http://localhost:5000/secrets", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser = res.data.user;
            });

        return Promise.resolve(this.isAuthenticated);

    },
    async getAuthUser() {
        await axios.get("http://localhost:5000/secrets", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.isAuthenticated = res.data.isAuth;
                this.authUser = res.data.user;
            });

        return Promise.resolve(this.authUser);

    },
}


export default Auth;

