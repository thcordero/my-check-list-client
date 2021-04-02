import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Secrets from "./Secrets";



function App() {
  

  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/" component={Home}>

            <Home />

          </Route>

          <ProtectedRoute path="/secrets" component={Secrets} />


          <Route path="/register" component={Register}>

            <Register />

          </Route>



        </Switch>
      </Router>
    </div>

  );
}



export default App;
