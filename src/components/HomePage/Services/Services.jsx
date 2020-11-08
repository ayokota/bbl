import React, { Component } from "react"
import { connect } from "react-redux";
import "./Services.scss";

import Service from "./Service/Service";

class Services extends Component {

    render() {
        return (
            <div className="component-services container-fluid">
                <div className="row">
                    <div className="col-sm-6 service-container">
                        <Service title={"K-8 Tutoring"} />
                    </div>
                    <div className="col-sm-6 service-container">
                        <Service title={"K-12 Tutoring"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 service-container">
                        <Service title={"9-12 Mentoring"} />
                    </div>
                    <div className="col-sm-6 service-container">
                        <Service title={"Professional Development"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 service-container">
                        <Service title={"Mentor"} />
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