import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { list } from "../redux/actions/build.action";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import imgTorre from '../assets/images/mac.jpg'

class CardsBuildComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      builds: [],
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    let data = await this.props.list();
    this.setState({ builds: data.data.torres });
  }

  render() {
    const { builds } = this.state;

    function Torres(props) {
      if (props.torre != undefined) {
        const torre_ = props.torre.map((item) => (
          <div className="column is-one-third">
            <div className="card">
            <div className="card-image">
            <figure className="image is-4by3">
              <img src={imgTorre} alt="Imagen Torre"></img>
              </figure>
              </div>
              <div className="card-content">
              <p className="title is-4 has-text-primary">Torre {item.id}</p>
              <div className="content">
                {item.description}
              </div>
            </div>
            </div>
          </div>
        ));

        return (
          <div className="columns">
            {torre_}
          </div>
        );
      } else {
        return (
          <div className="columns">
          </div>
        );
      }
    }
    return <Torres torre={builds} />;
  }
}

CardsBuildComponent.propTypes = {
  list: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { list })(CardsBuildComponent));
