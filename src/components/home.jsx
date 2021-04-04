import React, { Component } from "react";
import Typing from "react-typing-animation";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row full-height">
          <div className="col-12 d-flex align-items-center">
            <div className="col mb-5">
              <h1 className="text-light text-center font-weight-bold">
                <Typing speed={75} loop>
                  <Typing.Delay ms={500} />
                  <span>
                    <span className="text-info">{"<h1>"}</span>
                    <span className="text-white">{"Welcome to NULLSEC"}</span>
                    <span className="text-info">{"</h1>"}</span>
                  </span>
                  <Typing.Delay ms={5000} />
                  <Typing.Backspace count={27} />
                  <Typing.Delay ms={800} />
                </Typing>
              </h1>
              <h4 className="text-light text-center mt-4">
                The most amazing CyberSecurity Special Interest Group in Ngee
                Ann Polytechnic.
              </h4>
            </div>
          </div>
        </div>
        <div className="row bg-secondary text-white w-75 pt-4 pb-4 mx-auto">
          <div className="col-sm-5 d-flex align-items-center">
            <h2 className="mx-auto">
              Hello There <span className="wave-hand">👋</span>
            </h2>
          </div>
          <div className="col-sm-7">
            <p>
              We are NP's NullSec SIG, creative problem solvers that have a
              passion in CyberSecurity.
            </p>
            <p className="mb-0">
              At NullSec you will get the chance to help organise Capture The
              Flag Competition (CTF), participate in CyberSecurity related
              competition and host workshops to hone our member's skills!
            </p>
          </div>
        </div>
        <div className="row bg-dark pb-5 mb-5">
          <div className="col-12">
            <h2 className="text-light text-center"></h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
