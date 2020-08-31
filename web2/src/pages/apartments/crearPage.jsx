import React, { Component } from "react";
import  { withRouter, Link } from 'react-router-dom'
import FormAptComponent from "../../componets/FormApt.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

class CrearPage extends Component {
  render() {
    return (
        <section className="section">
          <div class="is-title-bar">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <h1 class="title"> Create Apartment </h1>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <Link to="list" className="button is-primary">List apartment</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <header class="card-header">
              <p class="card-header-title">
                <span class="icon">
                <FontAwesomeIcon icon={faBuilding} />
                </span>{" "}
                Apartment's Data{" "}
              </p>
            </header>
            <div className="card-content">
            <FormAptComponent />
            </div>
          </div>
        </section>
    );
  }
}

export default CrearPage;
