import React, { Component } from "react"
import { connect } from "react-redux";
import "./Banner.scss";
import {ReactComponent as LogoSvg} from "../../svgs/brand/logo.svg";


class HomePage extends Component {

    render() {
        return (
            <div className="component-banner container-fluid">
                <LogoSvg className="logo"/>
                <div className="title">olster </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HomePage);