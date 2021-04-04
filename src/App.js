import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignupForm from "./components/signupForm";
import Footer from "./components/footer";

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
      <Footer />
    </div>
  );
}

export default App;
