import React, { Component } from "react";
import  { withRouter, Link } from 'react-router-dom'
import DataTableAptComponent from "../../componets/DataTableApt.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";

class ListPage extends Component {
  render() {
    return (
        <section className="section">
          <div class="is-title-bar">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <h1 class="title"> Apartments </h1>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <Link to="create" className="button is-primary">Create apartment</Link>
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
                Apartment's List{" "}
              </p>
            </header>
            <div className="card-content">
            <DataTableAptComponent />
            </div>
          </div>
        </section>
    );
  }
}

export default ListPage;
