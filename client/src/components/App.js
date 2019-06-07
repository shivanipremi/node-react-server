import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {connect } from 'react-redux';
import * as actions from '../actions'

import Header from "./Header";
const Dashboard = () => <div>Dashboard</div>;
const ServeyNew = () => <div>ServeyNew</div>;
const Landing = () => <div>Landing</div>;

class App extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            {/* <Header /> */}
            <Route exact path="/" component={Header} />
            <Route path="/surveys" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
