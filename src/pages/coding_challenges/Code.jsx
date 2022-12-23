import React, { useEffect } from 'react';
import Prism from 'prismjs';

function Code({ code, language }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre className="line-numbers">
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
}

export default Code;
