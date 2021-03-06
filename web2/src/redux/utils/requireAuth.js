import React from 'react';
import PropTypes from 'prop-types'
import  { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
        this.props.history.push("/login");
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

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }


  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.authReducer.isAuthenticated
    };
  }

  return withRouter(connect(mapStateToProps, { addFlashMessage })(Authenticate));
}
