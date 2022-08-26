import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt=""
                            width="70"
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                        &ensp;Harry Potter Database
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    All
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Students">
                                    Students
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Staff">
                                    Staff
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
