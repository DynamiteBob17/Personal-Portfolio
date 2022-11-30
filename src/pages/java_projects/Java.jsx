import React from "react";
import "./Java.css";

function Java({ link, name, video, videoName }) {
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
        </div>
    );
}

export default Java;
