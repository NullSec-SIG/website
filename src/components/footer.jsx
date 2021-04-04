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
          <a
            className="btn"
            href="https://github.com/NullSec-SIG"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            className="btn"
            href="https://www.instagram.com/nullsec.sig/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
