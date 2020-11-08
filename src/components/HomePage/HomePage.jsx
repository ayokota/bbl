import React, { Component } from "react"
import { connect } from "react-redux";
import Banner from "../Banner/Banner";
import Services from "./Services/Services";

class HomePage extends Component {

    render() {
        return (
            <div className="component-home-page">
                <Banner />
                <Services />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HomePage);