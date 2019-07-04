import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { STATES } from "mongoose";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    console.log("this.props.auth=====", this.props.auth);
    console.log("check creditgs====", this.props.auth.credits);
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="payment">
            <Payments />
          </li>,
          <li key="credits" style={{ margin: "0 10px" }}>
            credits : {this.props.auth.credits}
          </li>,
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    console.log("check pros ==", this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"}>Emaily</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  console.log("stte is", state);
  return { auth: state.auth || false };
}

export default connect(mapStateToProps)(Header);
