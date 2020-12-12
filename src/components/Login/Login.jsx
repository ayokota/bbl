import React, { Component } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.scss";
import * as LoginService from "../../services/LoginService.js";

class Login extends Component {
    
    login() {
        LoginService.login();
        this.forceUpdate()
    }

    render() {
        let authenticated = LoginService.isLoggedIn();

        if(authenticated === true) {
            return <Redirect to={"/"} />
        }

        return (
            <div className="component-login container-fluid">
                <div className="user-pw-section">
                    <div className="username login-input">
                        <div className="label">Username </div>
                        <input />
                    </div>
                    <div className="password login-input">
                    <div className="label">Password </div>
                        <input />
                    </div>
                    <div className="submit-container login-input">
                        <button onClick={() => this.login()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Login);