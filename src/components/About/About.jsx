import React, { Component } from "react"
import { connect } from "react-redux";
// import "./About.scss";

class About extends Component {

    render() {
        return (
            <div className="component-about container-fluid">
                About section
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(About);