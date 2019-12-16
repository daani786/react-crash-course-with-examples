import Form from "./common/form";
import Joi from "joi-browser";
import React from "react";
import { login } from "../services/authService";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    username = React.createRef();

    doSubmit = async () => {
        // Call the server
        //const username = this.username.current.value;
        const { data } = this.state;
        await login(data.username, data.password);
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
