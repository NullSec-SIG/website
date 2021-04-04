import React, { Component } from "react";
import Typing from "react-typing-animation";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="row title">
        <div className="col-sm-12 justify-content-center d-flex align-items-center">
          <div className="col mb-5">
            <h1 className="text-light text-center font-weight-bold title-text">
              <Typing speed={75} loop>
                <Typing.Delay ms={500} />
                <span>Welcome to NULLSEC</span>
                <Typing.Delay ms={5000} />
                <Typing.Backspace count={18} />
                <Typing.Delay ms={800} />
              </Typing>
            </h1>
            <h4 className="text-light text-center title-text">
              The most amazing CyberSecurity Special Interest Group in Ngee Ann
              Polytechnic.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
