/* Libraries */
import React, { Component } from 'react';

/* Code */
class Wrapper extends Component {
  render() {
    return (
      <main className="main is-fullheight">
        { this.props.children }
      </main>
    );
  }
}

export default Wrapper;
