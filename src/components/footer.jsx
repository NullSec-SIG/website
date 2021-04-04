import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer bg-secondary pl-3 pr-3">
        <span className="ml-lg-5">NULLSEC 2021</span>
        <div className="float-right mr-lg-5">
          <button className="btn">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;
