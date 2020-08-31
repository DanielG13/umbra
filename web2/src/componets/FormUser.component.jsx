import React, { Component } from "react";
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { list } from '../redux/actions/role.action';
import { create } from '../redux/actions/user.action';
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

class FormCompanyComponent extends Component {
  state = {
    errors: {},
  };

  async componentDidMount() {
    let data = await this.props.list();
    this.setState({roles: data.data.roles})
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
    const { errors, roles, role } = this.state;

   function Rrll(props) {
     if (props.rol != undefined) {
       const roll= props.rol.map((item) =>
       <option value={item.id}>{item.name}</option>
  );


   return (
     <select name={props.name} value={props.value} onChange={props.change}>
     {roll}
     </select>
   );
 }else {
   return (
     <select>
     <option>Seleccione un rol</option>
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
              placeholder="User's Name"
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
              Last Name
            </label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="User's Last Name"
                name="lastname"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
            </div>
            {errors.lastname && <p class="help is-danger">{errors.lastname}</p>}
            </div>

            <div className="field">
            <label align="left" htmlFor="identificacion">
              Identificacion
            </label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="User's Identificacion"
                  name="identificacion"
                  onChange={this.handleChange}
                />
                 <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              {errors.identificacion && <p class="help is-danger">{errors.identificacion}</p>}
              </div>

            <div className="field">
              <label align="left" htmlFor="phonenumber">
                Phone Number
              </label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="User's Phone Number"
                  name="phonenumber"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
              </div>
              {errors.phonenumber && <p class="help is-danger">{errors.phonenumber}</p>}
              </div>

              <div className="field">
                <label align="left" htmlFor="role">
                  Role
                </label>
                <div className="control">
                <div class="select">
                <Rrll rol={roles} name="role" value={role} change={this.handleChange} />
                </div>
                </div>
                {errors.role && <p class="help is-danger">{errors.role}</p>}
                </div>

              <div className="field">
                <label align="left" htmlFor="username">
                  Username
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="User's Username"
                    name="username"
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                </div>
                {errors.username && <p class="help is-danger">{errors.username}</p>}
                </div>

                <div className="field">
                  <label align="left" htmlFor="email">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="User's Email"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faBuilding} />
                    </span>
                  </div>
                  {errors.email && <p class="help is-danger">{errors.email}</p>}
                  </div>

                  <div className="field">
                    <label align="left" htmlFor="password">
                      Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="User's Password"
                        name="password"
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faBuilding} />
                      </span>
                    </div>
                    {errors.password && <p class="help is-danger">{errors.password}</p>}
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

FormCompanyComponent.propTypes = {
  create: PropTypes.func.isRequired
}

FormCompanyComponent.propTypes = {
  list: PropTypes.func.isRequired
}


export default withRouter(connect(null, { create, list })(FormCompanyComponent));
