import React, { Component } from "react"
import "./ForgotPassword.scss";
import * as AuthApis from "../../apis/authApis.js";
import { Link } from "react-router-dom";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            sent: false
        }
    }

    renderForm() {
        return (
            <React.Fragment>
                <p>We will send you an email with codes, please enter the code below and press validate</p>
                <table className="forgot-password-table">
                    <tbody>
                        <tr>
                            <td>
                                Email address:
                            </td>
                            <td>
                                <input
                                    className="email-address-input"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })} />
                            </td>
                            <td>
                                <button
                                    className="button"
                                    onClick={() => this.sendResetPasswordEmail()}
                                > send </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    renderSent() {
        return (
            <React.Fragment>
                <p>If the email you have entered match our record, an email will be sent to the address you have provided.</p>
                <Link to="/">
                    <button className="button">
                        Home page
                    </button>
                </Link>
            </React.Fragment>

        )
    }

    render() {
        return (
            <div className="component-forgot-password container-fluid">
                {this.state.sent === false ?
                    this.renderForm()
                    :
                    this.renderSent()
                }
            </div>
        )
    }

    sendResetPasswordEmail() {
        let self = this;
        AuthApis.sendResetPasswordEmail(this.state.username)
            .then(function (response) {
                if (response.status === 201) {
                    self.setState({ sent: true })
                } else {
                    alert("Server respond with code: " + response.status)
                }
            }).catch(function (error) {
                // handle error
                console.log(error);
                alert(error)
            })
    }
}

export default ForgotPassword;