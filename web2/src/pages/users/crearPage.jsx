import React, { Component } from "react";
import FormCompanyComponent from "../../componets/FormUser.component";
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
                  <h1 class="title"> Create User </h1>
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
                User's Data{" "}
              </p>
            </header>
            <div className="card-content">
            <FormCompanyComponent />
            </div>
          </div>
        </section>
    );
  }
}

export default CrearPage;
