/* Libraries */
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { withRouter, Route } from 'react-router-dom';
import logo from "../assets/images/Group-18.png";
import asideStateToggle from "../redux/actions/asideStateToggle";
import { connect } from "react-redux";


/* Components */
import FooterLayouts from "../layouts/FooterLayouts";
import TopNavigation from "../layouts/TopNavigation";
import Sidebar from "../layouts/Sidebar";
import SidebarNavigation from "../layouts/SidebarNavigation";
import Wrapper from '../layouts/Wrapper';

const Loading = () => <div className="container"><div className="section"><h2 className="title">Cargando...</h2></div></div>;

/* Admin Routes */
const Dashboard = Loadable({
  loader: () => import('../pages/dashboard/dashboardPage'),
  loading: Loading
});

const CreateUser = Loadable({
  loader: () => import('../pages/users/crearPage'),
  loading: Loading
});

const ListUser = Loadable({
  loader: () => import('../pages/users/listPage'),
  loading: Loading
});

const CreateBuild = Loadable({
  loader: () => import('../pages/builds/crearPage'),
  loading: Loading
});

const ListBuild = Loadable({
  loader: () => import('../pages/builds/listPage'),
  loading: Loading
});

const CreateLevel = Loadable({
  loader: () => import('../pages/levels/crearPage'),
  loading: Loading
});

const ListLevel = Loadable({
  loader: () => import('../pages/levels/listPage'),
  loading: Loading
});

const CreateApt = Loadable({
  loader: () => import('../pages/apartments/crearPage'),
  loading: Loading
});

const ListApt = Loadable({
  loader: () => import('../pages/apartments/listPage'),
  loading: Loading
});


class Skeleton extends Component {

  render() {

    return (
      <div className="dashboard">
        <TopNavigation />

        <Sidebar>
          <div className="aside-container ps ps--active-y">
            <figure className="image logo">
              <img src={logo} alt="Image" />
            </figure>
            <SidebarNavigation />
          </div>
        </Sidebar>

        {/* Content */}
        <Wrapper>
          {/* Content by Route */}
          <Route exact path="/umbra" component={ Dashboard } />
          <Route exact path="/umbra/setting/user/create" component={ CreateUser } />
          <Route exact path="/umbra/setting/user/list" component={ ListUser } />
          <Route exact path="/umbra/building_manager/build/create" component={ CreateBuild } />
          <Route exact path="/umbra/building_manager/build/list" component={ ListBuild } />
          <Route exact path="/umbra/building_manager/level/create" component={ CreateLevel } />
          <Route exact path="/umbra/building_manager/level/list" component={ ListLevel } />
          <Route exact path="/umbra/building_manager/apartment/create" component={ CreateApt } />
          <Route exact path="/umbra/building_manager/apartment/list" component={ ListApt } />
        </Wrapper>

        {/* Footer */}
        <FooterLayouts />
      </div>
    );
  }
}

export default Skeleton;
