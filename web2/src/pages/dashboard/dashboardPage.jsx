import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { countt } from "../../redux/actions/apartment.action";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faLock, faLockOpen
} from "@fortawesome/free-solid-svg-icons";

class DashboardPage extends Component {

  constructor (props) {
    super(props)

    this.state = {};

  }


  async componentDidMount() {
   let data = await this.props.countt();
   const user = JSON.parse(localStorage.getItem('user'))
   this.setState({ user: user, apt: data.data.apt, aptD: data.data.aptD, aptR: data.data.aptR });
  }

  render() {
    const  { user, apt, aptD, aptR } = this.state
    return (
        <section className="section">
          <div className="is-title-bar">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title"> Welcome, {user}! </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div  className="card tile is-child">
                <div  className="card-content">
                  <div  className="level">
                    <div  className="level-item has-widget-icon">
                      <div  className="is-widget-icon">
                        <span
                          className="icon has-text-primary is-large"

                        >
                          <FontAwesomeIcon className="fa-2x" icon={faHome} />
                        </span>
                      </div>
                    </div>
                    <div  className="level-item">
                      <div  className="is-widget-label">
                        <h3  className="subtitle is-spaced">
                          {" "}
                          Apartment{" "}
                        </h3>
                        <h1  className="title">
                          <div > {apt} </div>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div  className="card tile is-child">
                <div  className="card-content">
                  <div  className="level">
                    <div  className="level-item has-widget-icon">
                      <div  className="is-widget-icon">
                      <span
                        className="icon has-text-primary is-large"

                      >
                        <FontAwesomeIcon className="fa-2x" icon={faLockOpen} />
                      </span>
                      </div>
                    </div>
                    <div  className="level-item">
                      <div  className="is-widget-label">
                        <h3  className="subtitle is-spaced">
                          {" "}
                          Available{" "}
                        </h3>
                        <h1  className="title">
                          <div > {aptD} </div>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div  className="card tile is-child">
                <div  className="card-content">
                  <div  className="level">
                    <div  className="level-item has-widget-icon">
                      <div  className="is-widget-icon">
                      <span
                        className="icon has-text-primary is-large"

                      >
                        <FontAwesomeIcon className="fa-2x" icon={faLock} />
                      </span>
                      </div>
                    </div>
                    <div  className="level-item">
                      <div  className="is-widget-label">
                        <h3  className="subtitle is-spaced">
                          {" "}
                          Available{" "}
                        </h3>
                        <h1  className="title">
                          <div > {aptR} </div>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

DashboardPage.propTypes = {
  countt: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { countt })(DashboardPage));
