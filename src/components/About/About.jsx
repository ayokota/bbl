import React, { Component } from "react"
import { connect } from "react-redux";
import "./About.scss";

class About extends Component {

    render() {
        return (
            <div className="component-about container-fluid">
                <div className="who-we-are">
                    <div className="title">Who we are</div>
                    <div className="story">
                        We want every students to succeed by providing a platform that'll connect tutors and students in need. 
                    </div>
                </div>
                <div className="origin-story">
                    <div className="title"> Our Origin Story </div>
                    <div className="story">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(About);