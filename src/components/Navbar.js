import React from "react";
import List from "./List";
import logo from "./logo.png";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img
                        src={logo}
                        width="47"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    Harry Potter Database
                </a>
            </nav>
            <List />
        </>
    );
}

export default Navbar;
