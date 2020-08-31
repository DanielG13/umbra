/* Libraries */
import React, { Component } from 'react';

/* Code */
class Sidebar extends Component {
  render() {
    return (
      <aside {...this.props} className="aside is-placed-left is-expanded" />
    );
  }
}

export default Sidebar;
