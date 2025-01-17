import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Notfound from "./components/notFound";
import Posts from "./components/posts";
import ProtectedRoute from "./components/common/protectedRoute";
import RegisterForm from "./components/registerForm";
import Rentals from "./components/rentals";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";

class App extends Component {
    state = {};

    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }
    render() {
        const { user } = this.state;

        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar user={user} />
                <main role="main" className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm}></Route>
                        <Route path="/logout" component={Logout}></Route>
                        <Route
                            path="/register"
                            component={RegisterForm}
                        ></Route>
                        <ProtectedRoute
                            path="/movies/:id"
                            component={MovieForm}
                        />
                        <Route
                            path="/movies"
                            render={props => <Movies {...props} user={user} />}
                        />
                        <Route path="/posts" component={Posts}></Route>
                        <Route path="/customers" component={Customers}></Route>
                        <Route path="/rentals" component={Rentals}></Route>
                        <Route path="/not-found" component={Notfound}></Route>

                        <Redirect from="/" exact to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
