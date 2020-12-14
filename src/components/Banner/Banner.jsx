import React, { Component } from "react"
import { connect } from "react-redux";
import "./Banner.scss";
import {ReactComponent as LogoSvg} from "../../svgs/brand/logo.svg";
import * as LoginService from "../../services/LoginService.js";
import { Redirect } from "react-router-dom";
import * as authAction from "../../redux/action/auth-action.js";

class HomePage extends Component {

    logout() {
        LoginService.logout();
        this.props.setAuthenticationStatus(false);
    }

    render() {

        return (
            <div className="component-banner container-fluid">
                <LogoSvg className="logo"/>
                <div className="title">olster </div>
                {this.props.authenticated === true ? 
                    <div className="logout" onClick={() => this.logout()}>Logout</div> 
                    : 
                    <Redirect to={"/login"} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    authenticated: state.authState.authenticated
});

const mapActionToProps = {
    setAuthenticationStatus: authAction.setAuthenticationStatus,
};

export default connect(mapStateToProps, mapActionToProps)(HomePage);