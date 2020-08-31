import React, { Component } from "react";
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { list as listBuild } from '../redux/actions/build.action';
import { list as listLevel } from '../redux/actions/level.action';
import { create } from '../redux/actions/apartment.action';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLock } from "@fortawesome/free-solid-svg-icons";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Este campo es obligatorio";
  }
  return errors;
};

class FormAptComponent extends Component {
  state = {
    errors: {},
  };

  async componentDidMount() {
    let build = await this.props.listBuild();
    let level = await this.props.listLevel();
    this.setState({builds: build.data.torres, levels: level.data.pisos})
 }


  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, roles,  ...users } = this.state;
    const result = validate(users);
    this.setState({ errors: result });
    if (!Object.keys(result).length) {
      // axios
      this.setState({ errors: {} });
      this.props.create(users).then(
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
    const { errors, builds, build, levels, level } = this.state;

   function Buildss(props) {
     if (props.build != undefined) {
       const build_= props.build.map((item) =>
       <option value={item.id}>Torre {item.id}</option>
  );
   return (
     <select name={props.name} value={props.value} onChange={props.change}>
     <option>Builds Select</option>
     {build_}
     </select>
   );
 }else {
   return (
     <select>
     <option>Builds Select</option>
     </select>
   );
 }
    }

    function Levelss(props) {
      if (props.level != undefined) {
        const level_= props.level.map((item) =>
        <option value={item.piso.id}>Level {item.piso.id}</option>
   );
    return (
      <select name={props.name} value={props.value} onChange={props.change}>
      <option>Levels Select</option>
      {level_}
      </select>
    );
  }else {
    return (
      <select>
      <option>Levels Select</option>
      </select>
    );
  }
     }

    return (
      <form id="login-form" onSubmit={this.handleSubmit}>

        <div className="field">
          <label align="left" htmlFor="name">
            Name
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Apartment's Name"
              name="name"
              onChange={this.handleChange}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
          </div>
          {errors.name && <p class="help is-danger">{errors.name}</p>}
          </div>

          <div className="field">
            <label align="left" htmlFor="lastname">
              Type
            </label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Apartment's Type"
                name="type"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
            </div>
            {errors.type && <p class="help is-danger">{errors.type}</p>}
            </div>

            <div className="field">
            <label align="left" htmlFor="identificacion">
              Built area
            </label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Apartment's Built Area"
                  name="built_area"
                  onChange={this.handleChange}
                />
                 <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              {errors.built_area && <p class="help is-danger">{errors.built_area}</p>}
              </div>

            <div className="field">
              <label align="left" htmlFor="phonenumber">
                Balcony area
              </label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Apartment's Balcony Area"
                  name="balcony_area"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
              </div>
              {errors.balcony_area && <p class="help is-danger">{errors.balcony_area}</p>}
              </div>

              <div className="field">
                <label align="left" htmlFor="role">
                  Balcony construction area
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Apartment's Balcony Construction Area"
                    name="balcony_construction_area"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                </div>
                {errors.balcony_construction_area && <p class="help is-danger">{errors.balcony_construction_area}</p>}
                </div>

              <div className="field">
                <label align="left" htmlFor="username">
                  Private area
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Apartment's Private Area"
                    name="private_area"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                </div>
                {errors.private_area && <p class="help is-danger">{errors.private_area}</p>}
                </div>

                <div className="field">
                  <label align="left" htmlFor="build">
                    Levels
                  </label>
                  <div className="control">
                  <div class="select">
                  <Levelss level={levels} name="level" value={level} change={this.handleChange} />
                  </div>
                  </div>
                  {errors.level && <p class="help is-danger">{errors.level}</p>}
                  </div>

                  <div className="field">
                    <label align="left" htmlFor="build">
                      Builds
                    </label>
                    <div className="control">
                    <div class="select">
                    <Buildss build={builds} name="build" value={build} change={this.handleChange} />
                    </div>
                    </div>
                    {errors.build && <p class="help is-danger">{errors.build}</p>}
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

FormAptComponent.propTypes = {
  create: PropTypes.func.isRequired
}

FormAptComponent.propTypes = {
  listBuild: PropTypes.func.isRequired
}

FormAptComponent.propTypes = {
  listLevel: PropTypes.func.isRequired
}


export default withRouter(connect(null, { create, listBuild, listLevel })(FormAptComponent));
