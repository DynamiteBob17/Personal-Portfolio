import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import Prism from "prismjs";
import "./prism.css";
import "./Challenge.css";

function Challenge({ idx,  filename, content }) {
    const [open, setOpen] = useState(false);
    const extension = filename.match(/(?<=.)[a-z]+$/i)[0];

    function handleClick() {
        setOpen(prevState => !prevState);
    }
     
    return (
        <div className={"challenge"}>
            <button onClick={handleClick}>
                {idx + 1}. {filename}
            </button>
            <UnmountClosed isOpened={open}>
                <div className={"collapsible_content"}>
                    <pre>
                        <code
                            className={`language-${extension}`} 
                            dangerouslySetInnerHTML={
                                { __html: Prism.highlight(content, Prism.languages[extension]) }
                            }
                        />
                    </pre>
                </div>
            </UnmountClosed>
        </div>
    );
}

export default Challenge;
