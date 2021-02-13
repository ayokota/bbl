import React, { Component } from "react"
import "./ForgotPassword.scss";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    render() { 
        return (
            <div className="component-forgot-password container-fluid">
                <p>We will send you an email with codes, please enter the code below and press validate</p>
                <table className="forgot-password-table">
                    <tbody>
                        <tr>
                            <td>
                                Email address: 
                            </td>
                            <td>
                                <input className="email-address-input" />
                            </td>
                            <td>
                                <button className="button"> send </button> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Code:
                            </td>
                            <td>
                                <input className="email-address-input" />
                            </td>
                            <td>
                                <button className="button"> validate </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ForgotPassword;