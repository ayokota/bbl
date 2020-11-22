import React, { Component } from "react"
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {

    render() {
        return (
            <div className="component-footer container-fluid">
                <footer class="pt-4  border-top footer">
                    <div class="row">
                        <div class="col-12 col-md">
                            <small class="d-block mb-3 text-muted">&copy; 2020-2020</small>
                        </div>
                        <div class="col-6 col-md">
                            <Link to="/">
                                <h5>Home</h5>
                            </Link>
                        </div>
                        <div class="col-6 col-md">
                            <Link to="/team">
                                <h5>Team</h5>
                            </Link>
                        </div>
                        <div class="col-6 col-md">
                            <Link to="/about">
                                <h5>About Us</h5>
                            </Link>
                        </div>
                        <div class="col-6 col-md">
                            <Link to="/contact">
                                <h5>Contact</h5>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Footer);