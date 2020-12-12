import React, { Component } from "react"
import { connect } from "react-redux";
import "./Banner.scss";
import {ReactComponent as LogoSvg} from "../../svgs/brand/logo.svg";
import * as LoginService from "../../services/LoginService.js";
import { Redirect } from "react-router-dom";

class HomePage extends Component {

    logout() {
        console.log("here");
        LoginService.logout();
        this.forceUpdate()
    }

    render() {
        let authenticated = LoginService.isLoggedIn();

        return (
            <div className="component-banner container-fluid">
                <LogoSvg className="logo"/>
                <div className="title">olster </div>
                {authenticated === true ? 
                    <div className="logout" onClick={() => this.logout()}>Logout</div> 
                    : 
                    <Redirect to={"/login"} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HomePage);