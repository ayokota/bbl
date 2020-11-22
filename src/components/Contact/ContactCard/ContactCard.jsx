import React, { Component } from "react"
import { connect } from "react-redux";
import "./ContactCard.scss";
import {ReactComponent as LinkedInLogo} from "../../../svgs/icons/socialMedia/linkedin.svg";
import {ReactComponent as TwitterLogo} from "../../../svgs/icons/socialMedia/twitter.svg";
import {ReactComponent as FacebookLogo} from "../../../svgs/icons/socialMedia/facebook.svg";
import {ReactComponent as InstagramLogo} from "../../../svgs/icons/socialMedia/instagram.svg";

class Contact extends Component {

    render() {
        return (
            <div className="component-contact-card">
                <div className="headshot">
                    <img src="https://ca-times.brightspotcdn.com/dims4/default/22fc870/2147483647/strip/true/crop/960x539+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc9%2F98%2Ffa3b0cb001e3541c5818a89cd5cc%2Fla-1475087498-snap-photo" />
                </div>
                <ul>
                    <li className="name">{this.props.name}</li>
                    <li>{this.props.position}</li>
                    <li ><LinkedInLogo className="social-media"/></li>
                    <li><FacebookLogo className="social-media"/></li>
                    <li><TwitterLogo className="social-media"/></li>
                    <li><InstagramLogo className="social-media"/></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Contact);