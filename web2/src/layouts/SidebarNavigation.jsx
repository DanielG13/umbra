import React, { Component } from "react";
import { withRouter, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAngleRight,
  faSetting,
  faAccount
} from "@fortawesome/free-solid-svg-icons";


class SidebarNavigation extends Component {

  constructor(props) {
          super(props);

          this.state = {
            isActive: true
          }

          this.handleClick = this.handleClick.bind(this);

        }

        handleClick = ({ target }) => {
          const name = target.getAttribute("name");
          let element = document.getElementById(name);
          if (!element.classList.contains('is-active')) {
            element.classList.add("is-active");
          }else{
            element.classList.remove("is-active");
          }

          //this.setState({ [name]: this.state. name });
        };

  render() {

    const menus = JSON.parse(localStorage.getItem('menu'))
    menus.forEach(item => {
      item.menu.active = false;
    });

    function SubItem(props) {
        const sub_menu = props.value.map((item) =>
        <li>
        <NavLink to={item.url} className="has-icon">
        <span class="icon">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span class="menu-item-label">{item.name}</span>
        </NavLink>
        </li>
  );
  return (
    <ul>
      {sub_menu}
    </ul>
  );
    }

  const listItems = menus.map((item) =>
  <li id={item.menu.name} >
  <NavLink to={item.menu.url} exact={true} className= "has-icon" name={item.menu.name} onClick={this.handleClick} >
  <span class="icon">
    <FontAwesomeIcon icon={['fas', 'home']} />
  </span>
  <span class="menu-item-label" name={item.menu.name}>{item.menu.name}</span>
  </NavLink>
  <SubItem key={item.menu.id} value={item.sub_menu} />
  </li>
  );

    return (
      <div className="menu is-menu-main">
      <ul className="menu-list">
        {listItems}
      </ul>
      </div>
    );
  }
}




export default withRouter(SidebarNavigation);
