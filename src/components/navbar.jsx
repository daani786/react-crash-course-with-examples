import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/posts/2018/06">Posts</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
