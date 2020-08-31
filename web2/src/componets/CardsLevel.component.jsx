import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { list } from "../redux/actions/level.action";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import imgTorre from '../assets/images/mac.jpg'

class CardsLevelComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      levels: [],
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    let data = await this.props.list();
    this.setState({ levels: data.data.pisos });
  }

  render() {
    const { levels } = this.state;
    function Levelss(props) {
      console.log(props.level);
        const level_= props.level.map((item) => (
          <div className="column is-one-quarter">
            <div className="card">
            <header class="card-header">
              <p class="card-header-title">
                Build {item.torre.id}
              </p>
            </header>
            <div className="card-image">
            <figure className="image is-4by3">
              <img src={imgTorre} alt="Imagen Level"></img>
              </figure>
              </div>
              <div className="card-content">
              <p className="title is-4 has-text-primary">Level {item.piso.id}</p>
              <div className="content">
                {item.piso.description}
              </div>
            </div>
            </div>
          </div>
        ));

        return (
          <div className="columns">
            {level_}
          </div>
        );
    }


    return (
      <Levelss level={levels} />
    );
  }
}

CardsLevelComponent.propTypes = {
  list: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { list })(CardsLevelComponent));
