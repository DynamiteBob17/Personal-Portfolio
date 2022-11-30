import React from "react";
import Prism from "prismjs";
import "./prism.css";
import "./Challenge.css";

function Challenge({ idx,  filename, content }) {
    return (
        <div className={"challenge"}>

        </div>
    );
}

/* {idx + 1}. {filename}
<div>
    <pre>
        <code
            className={"language-javascript"}
            dangerouslySetInnerHTML={{ __html: Prism.highlight(content, Prism.languages.javascript)}}
        />
    </pre>
</div> */

export default Challenge;
