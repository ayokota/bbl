import React, { Component } from "react"
import { connect } from "react-redux";
import Services from "./Services/Services";

class HomePage extends Component {

    render() {
        return (
            <div className="component-home-page">
                <Services />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HomePage);