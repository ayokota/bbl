import React, { Component } from "react"
import "./VerifyEmail.scss"
import * as AuthApi from "../../apis/authApis";


class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verificationCode: ""
        }
    }

    render() {
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

    verifyEmail() {
        let self = this;
        AuthApi.verification({
            username: this.props.username,
            verificationCode: this.state.verificationCode
        }).then(function (response) {
            // handle success
            if (response.data !== undefined && response.data.exists === 1) {
                self.props.postVerification()
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

export default VerifyEmail;