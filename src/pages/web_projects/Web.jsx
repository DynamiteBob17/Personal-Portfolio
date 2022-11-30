import React from "react";
import "./Web.css";

function Web({ link, name, screenshot, alt, source }) {
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
                [source code]
            </a>
        </div>
    );
}

export default Web;
