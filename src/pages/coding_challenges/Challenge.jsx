import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import "./Challenge.scss";
import Code from "./Code";

function Challenge({ idx, filename, code }) {
    const [open, setOpen] = useState(false);
    const language = filename.match(/(?<=.)[a-z]+$/i)[0];

    function handleClick() {
        setOpen(!open);
    }

    return (
        <div className={"challenge"}>
            <button onClick={handleClick} className={open ? "highlight_border" : ""}>
                {idx + 1}. {filename}
            </button>
            <UnmountClosed isOpened={open}>
                <div className={"collapsible_content"}>
                    <Code code={code} language={language} />
                </div>
            </UnmountClosed>
        </div>
    );
}

export default Challenge;
