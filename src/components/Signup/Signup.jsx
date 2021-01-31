import React, { Component } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as LoginService from "../../services/LoginService.js";
import * as authAction from "../../redux/action/auth-action.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Signup.scss"

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            success: false
        }
    }


    login() {

        LoginService.login();
        if (LoginService.isLoggedIn()) {
            this.props.setAuthenticationStatus(true);
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.username === "") {
            alert("Username cannot be empty")
            return
        } else if (this.state.password === "") {
            alert("Password cannot be empty")
            return
        } else if (this.state.firstname === "") {
            alert("Firstname cannot be empty")
            return
        } else if (this.state.lastname === "") {
            alert("Lastname cannot be empty")
            return
        }

        this.props.signup({
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname : this.state.lastname
        })
        this.setState({success : true})
    }

    renderSucceess() {
        return (
            <div className="success">
                <p>Registration success!</p>
                <Link to="/login">
                    <button>Return to login</button>
                </Link>
            </div>
        )
    }

    renderForm() {
        return (
            <form className="signup-form" onSubmit={(e) => this.onSubmit(e)}>
                <table className="signup-table">
                    <tbody>
                        <tr>
                            <td>
                                <div className="label"> Email </div>
                            </td>
                            <td>
                                <input value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="label"> Password </div>
                            </td>
                            <td>
                                <input type="password" value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="label"> firstname </div>
                            </td>
                            <td>
                                <input value={this.state.firstname}
                                    onChange={(e) => this.setState({ firstname: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="label"> lastname </div>
                            </td>
                            <td>
                                <input value={this.state.lastname}
                                    onChange={(e) => this.setState({ lastname: e.target.value })} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }

    render() {
        if (this.props.authenticated === true) {
            return (
                <Redirect to={"/"} />
            )
        }

        return (
            <div className="component-signup container-fluid">
                {this.state.success === false ?
                    this.renderForm() 
                    :
                    this.renderSucceess()
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    authenticated: state.authState.authenticated
});

const mapActionToProps = {
    signup: authAction.signup,
    setAuthenticationStatus: authAction.setAuthenticationStatus,
};

export default connect(mapStateToProps, mapActionToProps)(Signup);