import React, { Component } from "react";
import logo from "../assets/images/Group-18.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

class FooterLayouts extends Component {
  render() {
    return (
      <footer class="footer" bottom="0px">
        <div class="container">
          <div class="content">
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faCopyright} />
                  </span>
                  <p className="title is-size-6">
                    {" "}
                    <span className="active-year">2020</span>{" "}
                  </p>
                </div>
              </div>

              <div class="level-right">
                <div class="level-item">
                  <figure className="image logo">
                    <img src={logo} alt="Image" />
                  </figure>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterLayouts;
