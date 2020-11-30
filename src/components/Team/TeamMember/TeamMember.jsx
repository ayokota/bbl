import React, { Component } from "react"
import { connect } from "react-redux";
import "./TeamMember.scss";
import {ReactComponent as LinkedInLogo} from "../../../svgs/icons/socialMedia/linkedin.svg";
import {ReactComponent as TwitterLogo} from "../../../svgs/icons/socialMedia/twitter.svg";
import {ReactComponent as FacebookLogo} from "../../../svgs/icons/socialMedia/facebook.svg";
import {ReactComponent as InstagramLogo} from "../../../svgs/icons/socialMedia/instagram.svg";

class Contact extends Component {

    render() {
        return (
            <div className="component-contact-card">
                <div className="headshot">
                    <img src={this.props.profilePicUrl} />
                </div>
                <ul>
                    <li className="name">{this.props.name}</li>
                    <li>{this.props.position}</li>
                    {this.props.email === undefined ? null : 
                    <li>{this.props.email}</li>}
                    {this.props.linkedin === undefined ? null :
                        <li >
                            <a href={this.props.linkedin} target="_blank">
                                <LinkedInLogo className="social-media" />
                            </a>
                        </li>
                    }
                    
                    {this.props.facebook === undefined ? null :
                    <li><FacebookLogo className="social-media" url={this.props.facebook}/></li>}
                    {this.props.twitter === undefined ? null :
                    <li><TwitterLogo className="social-media" url={this.props.twitter}/></li>}
                    {this.props.instagram === undefined ? null :
                    <li><InstagramLogo className="social-media" url={this.props.instagram}/></li>}
                    {this.props.bio === undefined ? null:
                    <p>{this.props.bio}</p>}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Contact);