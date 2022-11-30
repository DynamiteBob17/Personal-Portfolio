import React from "react";
import { NavLink } from "react-router-dom";
import "./Work.css";

function Work({ icon, title, description, route }) {
    return (
        <NavLink className={"work"} to={route}>
            <div className={"work_title"}>
                <i className={icon} /> {title}
            </div>
            <div className={"work_desc"}>
                {description}
            </div>
        </NavLink>
    );
}

export default Work;
