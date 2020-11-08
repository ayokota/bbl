import React, { Component } from "react"
import { connect } from "react-redux";
import "./Service.scss";

class Services extends Component {

    render() {
        return (
            <div className="component-service container-fluid">
                <div className="title-container">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Services);