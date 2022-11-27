import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <nav>
            <NavLink
                className={navData => navData.isActive ? "active" : "inactive"}
                to="/"
            >
                <i className={"fa fa-home"} aria-hidden="true"></i>
            </NavLink>
            <NavLink
                className={navData => navData.isActive ? "active" : "inactive"}
                to="/web_projects"
            >
                web
            </NavLink>
            <NavLink
                className={navData => navData.isActive ? "active" : "inactive"}
                to="/java_projects"
            >
                java
            </NavLink>
            <NavLink
                className={navData => navData.isActive ? "active" : "inactive"}
                to="/coding_challenges"
            >
                challenges
            </NavLink>
        </nav>
    )
}

export default Navbar;
