import React from "react";
import "./Web.scss";

function Web({ link, name, screenshot, alt, source, sourceComment }) {
    return (
        <div className={"web_project"}>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={"web_project_link"}
            >
                <div className={"web_project_name"}>
                    {name}
                </div>
                <img
                    src={screenshot}
                    alt={alt}
                />
            </a>
            <a
                href={source}
                target="_blank"
                rel="noreferrer"
                className={"web_project_source_link"}
            >
                [source code]{sourceComment === undefined ? '' : ` *${sourceComment}`}
            </a>
        </div>
    );
}

export default Web;
