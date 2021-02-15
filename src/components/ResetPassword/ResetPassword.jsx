import React, { Component } from "react"
import "./ResetPassword.scss";
import {ReactComponent as ShowPasswordIcon} from "../../svgs/password/show.svg";
import {ReactComponent as HidePasswordIcon} from "../../svgs/password/hide.svg";
import { useLocation, withRouter } from "react-router-dom";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            repeatPassword: "",
            showPassword: false
        }
    }

    onSubmit() {
        if(this.state.password === "" && this.state.repeatPassword === "") {
            alert("Your password cannot be empty!")
        } else if( this.state.password !== this.state.repeatPassword) {
            alert("The passwords does not match!")
        }

        let urlParam =  new URLSearchParams(this.props.location.search);
        let uuid = urlParam.get('uuid');
        
        console.log(uuid);

    }

    render() {
        console.log("Here");
        return (
            <div className="component-reset-password container-fluid">
                <p> Reset your password here </p>
                <table className="signup-table">
                    <tbody>
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
                            <td colSpan={2}>
                                <button onClick={() => this.onSubmit()}>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

}

export default withRouter(ResetPassword);