import React, { Component } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as LoginService from "../../services/LoginService.js";
import * as authAction from "../../redux/action/auth-action.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as AuthApi from "../../apis/authApis";
import "./Signup.scss"

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            verificationCode: "",
            success: false,
            verified: false
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

        let self = this;
        AuthApi.signup({
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname : this.state.lastname
        }).then(function (response) {
            // handle success
            let resBody = response.data;
            console.log(resBody);
            if(resBody.exists === 1) {
                alert("User already exists");
            } else if(resBody.created === 1) {
                self.setState({success : true})
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            alert(error)
          })
       
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

    renderVerification() {
        return (
            <div className="email-verification">
                <p>An email has been sent to you, please check your email for the verification code</p>
                <p>Verification Code</p>
                <input className="verification-input" value={this.state.verificationCode}
                        onChange={(e) => this.setState({ verificationCode: e.target.value })} />                
                <div className="button-group">
                    <button onClick={() => {
                        AuthApi.resendVerificationCode(this.state.username);
                        alert("Verification code has been sent to your email!")
                    }}>Resend</button>
                    <button onClick={() => { this.verifyEmail() }} >Submit</button>
                </div>
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
                    this.state.verified === false ?
                        this.renderVerification()
                        :
                        this.renderSucceess()
                }
            </div>
        )
    }

    verifyEmail() {
        let self = this;
        AuthApi.verification({
            username: this.state.username,
            verificationCode: this.state.verificationCode
        }).then(function (response) {
            // handle success
            if(response.data !== undefined && response.data.exists === 1) {
                self.setState({verified: true})
            } else {
                alert("Incorrect verification code...")
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            alert(error)
          })
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