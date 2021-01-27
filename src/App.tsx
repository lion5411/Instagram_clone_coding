import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
