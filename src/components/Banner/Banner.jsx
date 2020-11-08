import React, { Component } from "react"
import { connect } from "react-redux";
import "./Banner.scss";

class HomePage extends Component {

    render() {
        return (
            <div className="component-banner container-fluid">
                <div>Coming Soon... </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HomePage);