import React from "react";
import "./Web.scss";

function Web({ link, name, screenshot, alt, source, sourceComment, fccSources, fccComments }) {
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
            {
                source
                    ? <a
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        className={"web_project_source_link"}
                    >
                        [source code]{sourceComment === undefined ? '' : ` *${sourceComment}`}
                    </a>
                    : fccSources.map((fccSource, idx) => {
                        return (
                            <a
                                href={fccSource}
                                target="_blank"
                                rel="noreferrer"
                                className={"web_project_source_link"}
                            >
                                {fccComments[idx]}
                            </a>
                        );
                    })
            }
        </div>
    );
}

export default Web;
