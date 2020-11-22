import React, { Component } from "react"
import { connect } from "react-redux";
import TeamMember from "./TeamMember/TeamMember";
import "./Team.scss";

class Contact extends Component {

    render() {
        return (
            <div className="component-team container-fluid">
                <div className="team-container">
                    <TeamMember 
                        name="Brett Imel" 
                        position="CEO" 
                        email="brett.imel@bolsternetwork.org"
                        linkedin="https://www.linkedin.com/in/brett-imel-mpa-157634108/"
                    />
                    <TeamMember 
                        name="Akiyo Yokota" 
                        position="Software Engineer" 
                        email="akiyo.yokota@gmail.com"
                        linkedin="https://www.linkedin.com/in/akiyoyokota/"
                    />
                    <TeamMember name="Person 3" position="Parasite" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Contact);