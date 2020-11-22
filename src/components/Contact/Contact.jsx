import React, { Component } from "react"
import { connect } from "react-redux";
import ContactCard from "./ContactCard/ContactCard";
import "./Contact.scss";

class Contact extends Component {

    render() {
        return (
            <div className="component-contact container-fluid">
                <div className="contacts-container">
                    <ContactCard name="Brett Imel" position="CEO" />
                    <ContactCard name="Akiyo Yokota" position="Software Engineer" />
                    <ContactCard name="Person 3" position="Parasite" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Contact);