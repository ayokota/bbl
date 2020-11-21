import React, { Component } from "react"
import { connect } from "react-redux";

class Contact extends Component {

    render() {
        return (
            <div className="component-contact container-fluid">
                conact section
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Contact);