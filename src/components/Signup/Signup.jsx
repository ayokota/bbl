import React, { Component } from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as LoginService from "../../services/LoginService.js";
import * as authAction from "../../redux/action/auth-action.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as AuthApi from "../../apis/authApis";
import VerifyEmail from "../VerifyEmail/VerifyEmail";
import "./Signup.scss"
import {ReactComponent as ShowPasswordIcon} from "../../svgs/password/show.svg";
import {ReactComponent as HidePasswordIcon} from "../../svgs/password/hide.svg";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
            showPassword: false,
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
        } else if(this.state.password !== this.state.repeatPassword) {
            alert("The 2 passwords you have entered do no match")
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
                                <input type={this.state.showPassword === true ? "text" : "password"} 
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })} />
                                
                            </td>
                            <td>
                                <label onClick={() => this.setState({showPassword : !this.state.showPassword})}>
                                    {
                                        this.state.showPassword === true? 
                                        <ShowPasswordIcon className="password-icon"/>
                                        :
                                        <HidePasswordIcon className="password-icon"/>
                                    }
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="label"> Repeat Password </div>
                            </td>
                            <td>
                                <input type={this.state.showPassword === true ? "text" : "password"} 
                                    value={this.state.repeatPassword}
                                    onChange={(e) => this.setState({ repeatPassword: e.target.value })} />
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
                        <VerifyEmail 
                            username={this.state.username}
                            postVerification={() => this.setState({verified: true})} />
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