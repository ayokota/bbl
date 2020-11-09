import React, { Component } from "react"
import { connect } from "react-redux";
import "./Service.scss";

class Services extends Component {

    render() {
        return (
            <div className="component-service container-fluid">
                <div className="content-container">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Services);