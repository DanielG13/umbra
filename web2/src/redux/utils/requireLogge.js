import React from 'react';
import PropTypes from 'prop-types'
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
  class ValidateLogge extends React.Component {
    componentWillMount() {
      if (this.props.isAuthenticated) {
        this.props.history.push("/umbra");
        window.location.reload();
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push("/");
        window.location.reload();
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  ValidateLogge.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }


  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.authReducer.isAuthenticated
    };
  }

  return withRouter(connect(mapStateToProps)(ValidateLogge));
}
