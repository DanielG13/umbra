import React, { Component } from "react";
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../redux/actions/auth.action';
import logo from "../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

class TopNavigation extends Component {
  constructor (props) {
    super(props)

    this.state = {};


    this.handleLogout = this.handleLogout.bind(this);
  }

   componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.setState({ user: user });
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
  const  { user } = this.state
    return (
       <nav id="navbar-main" class="navbar is-fixed-top">
        <div class="navbar-brand">
          <a
            className="navbar-item is-hidden-touch"
            title="Collaps"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop" title="Collapse">
            <span className="icon">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </a>
        </div>

        {/* <div class="navbar-brand is-right">
          <div class="navbar-item"></div>
        </div> */}

        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <figure class="image is-32x32">
                  <img class="is-rounded" src={logo} />
                </figure>
                &nbsp;
                <span> {user}</span>
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
            <a title="Log out" class="navbar-item" onClick={this.handleLogout}>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              &nbsp;
              <span>Log out</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

TopNavigation.propTypes = {
  logout: PropTypes.func.isRequired
}

export default withRouter(connect(null, { logout })(TopNavigation));
