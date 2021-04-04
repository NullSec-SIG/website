import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignupForm from "./components/signupForm";

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/signup" component={SignupForm} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
