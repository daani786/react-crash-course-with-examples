import "./App.css";

import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Notfound from "./components/notFound";
import Posts from "./components/posts";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";

class App extends Component {
    render() {
        return (
            <main className="container">
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route
                            path="/products/:id"
                            component={ProductDetails}
                        />
                        <Route
                            path="/products"
                            render={props => (
                                <Products sortBy="newest" {...props} />
                            )}
                        />
                        <Route path="/posts/:year?/:month?" component={Posts} />
                        <Route path="/admin" component={Dashboard} />
                        <Redirect from="/messages" to="/posts" />
                        <Route path="/not-found" exact component={Notfound} />
                        <Route path="/" exact component={Home} />

                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </main>
        );
    }
}

export default App;
