import './App.scss';
import React, { Component } from "react";
import { connect } from "react-redux";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import * as LoginService from "./services/LoginService.js";
import * as authAction from "./redux/action/auth-action.js";

class App extends Component {

  componentDidMount() {
    if (LoginService.isLoggedIn()) {
      this.props.setAuthenticationStatus(true);
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Banner />
            <div className="body">
              <Route path={"/"} exact component={HomePage} />
              <Route path={"/about"} exact component={About} />
              <Route path={"/contact"} exact component={Contact} />
              <Route path={"/team"} exact component={Team} />
              <Route path={"/login"} exact component={Login} />
              <Route path={"/signup"} exact component={Signup} />
              <Route path={"/forgotPassword"} exact component={ForgotPassword} />
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = (state, props) => ({
  authenticated: state.authState.authenticated
});

const mapActionToProps = {
  setAuthenticationStatus: authAction.setAuthenticationStatus,
  authenticate: authAction.authenticate,
};


export default connect(mapStateToProps, mapActionToProps)(App);