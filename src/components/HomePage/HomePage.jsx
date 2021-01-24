import React, { Component } from "react"
import { connect } from "react-redux";
import Services from "./Services/Services";
import { Redirect } from "react-router-dom";

class HomePage extends Component {

    render() {
        if(this.props.authenticated === false) {
            return (
                <Redirect to={"/login"} />
            )
        }

        return (
            <div className="component-home-page">
                <Services />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    authenticated: state.authState.authenticated
});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HomePage);