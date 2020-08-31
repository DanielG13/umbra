import React from "react";
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth.action';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Este campo es obligatorio";
  }
  if (!values.password) {
    errors.password = "Este campo es obligatorio";
  }
  return errors;
};

class FormComponent extends  React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, ...users } = this.state;
    const result = validate(users);
    this.setState({ errors: result });
    if (!Object.keys(result).length) {
      // axios
      this.setState({ errors: {}, isLoading: true });
      console.log(this.props.login(users));
      this.props.login(users).then(
        () => {
          this.props.history.push("/umbra");
          window.location.reload();
        },
        error => {
          this.setState({username: '', password: '', errors: {
            username: "error in username", password: "error in password"
          }, isLoading: false })
        }
      );

    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label align="left" htmlFor="username">
            Username
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          {errors.username && <p class="help is-danger">{errors.username}</p>}
        </div>
        <div className="field">
        <label>Password</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          {errors.password && <p class="help is-danger">{errors.password}</p>}
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-success is-fullwidth">
              Login
            </button>
          </p>
        </div>
      </form>
    );
  }
}

FormComponent.propTypes = {
  login: PropTypes.func.isRequired
}



export default withRouter(connect(null, { login })(FormComponent));
