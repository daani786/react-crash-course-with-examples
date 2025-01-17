import * as userService from "../services/userService";

import Form from "./common/form";
import Joi from "joi-browser";
import React from "react";
import auth from "../services/authService";

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi.string()
            .required()
            .label("Name")
    };

    doSubmit = async () => {
        // Call the server
        //const username = this.username.current.value;
        //console.log("submitted");
        try {
            const response = await userService.register(this.state.data);
            auth.loginWithJwt(response.headers["x-auth-token"]);
            //this.props.history.push("/");
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
