import React from "react";
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { list } from '../redux/actions/build.action';
import { create } from '../redux/actions/level.action';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

const validate = (values) => {
  const errors = {};
  if (!values.description) {
    errors.description = "Este campo es obligatorio";
  }
  if (!values.torre) {
    errors.torre = "Este campo es obligatorio";
  }
  return errors;
};

class FormLevelComponent extends  React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let data = await this.props.list();
    this.setState({torres: data.data.torres})
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
    const { errors, torres, torre } = this.state;

    function Torre(props) {
      if (props.build != undefined) {
        const torre_= props.build.map((item) =>
        <option value={item.id}>Torre {item.id}</option>
   );


    return (
      <select name={props.name} value={props.value} onChange={props.change}>
      <option>Build setelect</option>
      {torre_}
      </select>
    );
  }else {
    return (
      <select>
      <option>Build setelect</option>
      </select>
    );
  }
     }

    return (
      <form id="level-form" onSubmit={this.handleSubmit}>
      <div className="field">
        <label align="left" htmlFor="build">
          Builds
        </label>
        <div className="control">
        <div class="select">
        <Torre build={torres} name="torre" value={torre} change={this.handleChange} />
        </div>
        </div>
        {errors.role && <p class="help is-danger">{errors.role}</p>}
        </div>

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

FormLevelComponent.propTypes = {
  create: PropTypes.func.isRequired
}

FormLevelComponent.propTypes = {
  list: PropTypes.func.isRequired
}



export default withRouter(connect(null, { create, list })(FormLevelComponent));
