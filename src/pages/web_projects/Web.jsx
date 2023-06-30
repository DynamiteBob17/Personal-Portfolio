import React from "react";
import "./Web.scss";
import ReadmeModal from "../ReadmeModal";

function Web({ link, name, screenshot, alt, source, repo, sourceComment }) {
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
                [repository]{sourceComment === undefined ? '' : ` *${sourceComment}`}
            </a>
            {repo !== undefined && <ReadmeModal repo={repo}/>}
        </div>
    );
}

export default Web;
