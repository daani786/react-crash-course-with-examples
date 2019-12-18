import { Link, NavLink } from "react-router-dom";

import React from "react";

const NavBar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to="/">
                Vidly
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <React.Fragment>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/customers">
                                Customers
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/rentals">
                                Rentals
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/posts">
                                Posts
                            </NavLink>
                        </li>
                    </React.Fragment>
                    {!user && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">
                                    Register
                                </NavLink>
                            </li>
                        </React.Fragment>
                    )}
                    {user && (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-item nav-link"
                                    to="/profile"
                                >
                                    {user.name}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-item nav-link"
                                    to="/logout"
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
