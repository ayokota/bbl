import React, { Component } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.scss";
import * as LoginService from "../../services/LoginService.js";
import * as authAction from "../../redux/action/auth-action.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    
    login() {
        // this.props.authenticate();

        LoginService.login();
        if(LoginService.isLoggedIn()) {
            this.props.setAuthenticationStatus(true);
        }
    }

    render() {
        if(this.props.authenticated === true) {
            return (
                <Redirect to={"/"} />
            )
        }

        return (
            <div className="component-login container-fluid">
                <div className="user-pw-section">
                    <div className="username login-input">
                        <div className="label"> Username </div>
                        <input value={this.state.username} 
                            onChange={(e) => this.setState({username : e.target.value})}/>
                    </div>
                    <div className="password login-input">
                    <div className="label"> Password </div>
                        <input type="password" value={this.state.password}
                            onChange={(e) => this.setState({password : e.target.value})}/>
                    </div>
                    <div className="submit-container login-input">
                        <button className="button" onClick={() => 
                            this.props.authenticate({username: this.state.username, password: this.state.password})}
                        >
                            Submit
                        </button>
                        <Link to="/signup">
                            <button className="button">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    authenticated: state.authState.authenticated
});

const mapActionToProps = {
    authenticate : authAction.authenticate,
    setAuthenticationStatus: authAction.setAuthenticationStatus,
};

export default connect(mapStateToProps, mapActionToProps)(Login);