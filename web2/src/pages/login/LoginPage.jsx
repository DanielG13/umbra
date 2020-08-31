import React, { Component } from "react";
import FooterLayouts from "../../layouts/FooterLayouts";
import logo from "../../assets/images/Group-18.png";
import FormComponent from "../../componets/FormComponent";
import fullPage from "../../redux/actions/fullPage";
import { connect } from "react-redux";

class LoginPage extends Component {
  render() {
    const { layouts, fullPage } =  this.props;
    fullPage(true)
    console.log(layouts);

    return (
      <div className="dashboard">
        <section className="section">
          <div className="container">
            <div class="columns is-centered is-vcentered is-multiline">
              <div class="column is-full is-clearfix has-text-centered">
                <figure className="image logo logo-login">
                  <img src={logo} alt="Image" />
                </figure>
              </div>
              <div class="column is-one-third is-clearfix has-text-centered">
                <div className="card is-radius">
                  <div className="card-content">
                    <div className="content">
                      <FormComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterLayouts />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    layouts: state.layouts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fullPage: Boolean => {
      dispatch(fullPage(Boolean))
    }
  }
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)
const component = wrapper(LoginPage);


export default component;
