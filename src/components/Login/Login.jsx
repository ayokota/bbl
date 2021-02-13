import React, { Component } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.scss";
import * as LoginService from "../../services/LoginService.js";
import * as authAction from "../../redux/action/auth-action.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as AuthApis  from "../../apis/authApis.js";
import VerifyEmail from "../VerifyEmail/VerifyEmail";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            needVerification: false,
            verified: false
        }
    }

    login() {
        LoginService.login();
        if (LoginService.isLoggedIn()) {
            this.props.setAuthenticationStatus(true);
        }
    }

    renderLoginForm() {
        return (
            <div className="user-pw-section">
                <div className="username login-input">
                    <div className="label"> Username </div>
                    <input value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })} />
                </div>
                <div className="password login-input">
                    <div className="label"> Password </div>
                    <input type="password" value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div className="submit-container login-input">
                    <button className="button" onClick={() =>
                        // this.props.authenticate({ username: this.state.username, password: this.state.password })}
                        this.authenticate()
                    }>
                        Login
                        </button>
                    <Link to="/signup">
                        <button className="button">
                            Sign up
                            </button>
                    </Link>
                    <button className="button" onClick={() => resetPassword() }>
                        reset password
                    </button>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.authenticated === true || this.state.verified === true) {
            return (
                <Redirect to={"/"} />
            )
        }
 
        return (
            <div className="component-login container-fluid">
                {
                    this.state.needVerification === false?
                        this.renderLoginForm()
                        :
                        <div className="verify-email-container">
                            <VerifyEmail 
                                username={this.state.username}
                                postVerification={() => {
                                    this.setState({verified: true});
                                    this.props.setAuthenticationStatus(true);
                                }} />
                        </div>
                }
            </div>
        )
    }

    authenticate() {
        let self = this;
        AuthApis.authenticate({ username: this.state.username, password: this.state.password })
        .then(function (response) {
            // handle success
            let resBody = response.data;
            console.log(resBody);
            if(resBody.authenticated === 0 && resBody.notVerified === 0) {
                alert("Incorrect username and/or password. Please try again")
            } else if(resBody.authenticated === 0 && resBody.notVerified === 1) {
                alert("You have not verified your email yet.")
                self.setState({needVerification: true})
            } else {
                self.login();
            }
            
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            alert(error)
          })
    }

    resetPassword() {
        console.log("reset password!");
    }
}

const mapStateToProps = (state, props) => ({
    authenticated: state.authState.authenticated
});

const mapActionToProps = {
    authenticate: authAction.authenticate,
    setAuthenticationStatus: authAction.setAuthenticationStatus,
};

export default connect(mapStateToProps, mapActionToProps)(Login);