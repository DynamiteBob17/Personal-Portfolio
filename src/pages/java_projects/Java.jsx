import React from "react";
import "./Java.scss";
import ReadmeModal from "../ReadmeModal";

function Java({ link, name, video, videoName, repo }) {
    return (
        <div className={"java_project"}>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                {name}
            </a>
            <iframe 
                allowFullScreen
                src={video}
                title={videoName}
            />
            {repo !== undefined && <ReadmeModal repo={repo}/>}
        </div>
    );
}

export default Java;
