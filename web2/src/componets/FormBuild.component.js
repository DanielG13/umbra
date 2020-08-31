import React from "react";
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { create } from '../redux/actions/build.action';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

const validate = (values) => {
  const errors = {};
  if (!values.description) {
    errors.description = "Este campo es obligatorio";
  }
  return errors;
};

class FormBuildComponent extends  React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
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
    const { errors, ...build } = this.state;
    const result = validate(build);
    this.setState({ errors: result });
    if (!Object.keys(result).length) {
      // axios
      this.setState({ errors: {}});
      this.props.create(build).then(
        () => {
          this.props.history.push("/umbra");
          window.location.reload();
        },
        error => {
          console.log(error);
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
            Description
          </label>
          <div className="control">
            <textarea className="textarea" name="description" onChange={this.handleChange} placeholder="Description's Build"></textarea>
          </div>
          {errors.description && <p class="help is-danger">{errors.description}</p>}
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-success is-fullwidth">
              Create
            </button>
          </p>
        </div>
      </form>
    );
  }
}

FormBuildComponent.propTypes = {
  create: PropTypes.func.isRequired
}



export default withRouter(connect(null, { create })(FormBuildComponent));
