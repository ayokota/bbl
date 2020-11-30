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
                        profilePicUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGQAtZLL3qzxQ/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=qJzejCsMzqOCZDgiLtJ6FeqNsR7oVntDuWN_3ZwmAv8"
                        name="Brett Imel" 
                        position="CEO" 
                        email="brett.imel@bolsternetwork.org"
                        linkedin="https://www.linkedin.com/in/brett-imel-mpa-157634108/"
                        bio="Brett was born, and raised in the San Francisco Bay Area. His Master’s degree in Public Administration coupled with experience in education, coaching, and working in the public sector serve to bolster his performance as Founder and CEO."
                    />
                    <TeamMember 
                        profilePicUrl="https://media-exp1.licdn.com/dms/image/C5603AQHsV6D8xFWj7Q/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=YbcG-s0MX9kEsi65oe5YPlLyQbTFWLLSn-HCAxpvvT0"
                        name="Akiyo Yokota" 
                        position="Software Engineer" 
                        email="akiyo.yokota@gmail.com"
                        linkedin="https://www.linkedin.com/in/akiyoyokota/"
                        bio="Akiyo is the first and only Software Developer for this Org. He will be the CTO until an actual CTO joins the org."
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Contact);