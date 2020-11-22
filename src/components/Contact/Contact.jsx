import React, { Component } from "react"
import { connect } from "react-redux";
import {ReactComponent as TwitterLogo} from "../../svgs/icons/socialMedia/twitter.svg";
import {ReactComponent as InstagramLogo} from "../../svgs/icons/socialMedia/instagram.svg";

import "./Contact.scss";

class Contact extends Component {

    render() {
        return (
            <div className="component-contact container-fluid">
                You may reach us through
                <ul>
                    <li>admin@bolsternetwork.org</li>
                    <li >
                        <a href={"https://twitter.com/BolsterNetwork"} target="_blank">
                            <TwitterLogo className="social-media" />
                        </a>
                    </li>
                    <li >
                        <a href={"https://www.instagram.com/thebolsternetwork/"} target="_blank">
                            <InstagramLogo className="social-media" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Contact);