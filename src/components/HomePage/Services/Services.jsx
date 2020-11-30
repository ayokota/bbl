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
                        <Service 
                            ready={false}
                            title={"K-8 Tutoring"} 
                            description={"Personalized lessons with one of our extraordinary mentors, tailored to complement your child’s current education."}
                        />
                    </div>
                    <div className="col-sm-6 service-container">
                        <Service 
                            ready={false}
                            title={"K-12 Tutoring"} 
                            description={"Personalized lessons with one of our extraordinary mentors, tailored to fulfill your current educational needs."}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 service-container">
                        <Service 
                            ready={false}
                            title={"9-12 Mentoring"}
                            description={"Customized mentoring and guidance to give young adults entering the workforce a leg up on the competition."} 
                        />
                    </div>
                    <div className="col-sm-6 service-container">
                        <Service 
                            ready={false}
                            title={"Professional Development"} 
                            description={"Individualized advisement sessions structured around bettering your professional skillset, career, and future."}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 service-container">
                        <Service 
                            ready={false}
                            title={"Mentor"} 
                            description={"Interested in an opportunity for shared learning and growth while furthering another’s potential? Applicants welcome!"}
                        />
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