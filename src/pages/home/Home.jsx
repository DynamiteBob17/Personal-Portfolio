import React, { useEffect, useState } from "react";
import './Home.scss';
import Work from "./Work";

const birthday = new Date('2000/01/08 00:10');

function Home() {
    const [age, setAge] = useState(new Date(new Date() - birthday));

    function refreshAge() {
        setAge(new Date(new Date() - birthday));
    }

    useEffect(() => {
        const timerId = setInterval(refreshAge, 100);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div id="homepage">
            <div id="intro">
                <div id="hello">
                    Hello, I'm Jan
                </div>
                <div id="intro_desc">
                    A software developer
                </div>
                <div id="age_desc">
                    How old am I?
                    <div id="age">
                        {age.getUTCFullYear() - 1970} <sub>yrs</sub>
                        &nbsp;{age.getUTCMonth()} <sub>mths</sub>
                        &nbsp;{age.getUTCDate() - 1} <sub>days</sub>
                        &nbsp;{age.getUTCHours()} <sub>hrs</sub>
                        &nbsp;{age.getUTCMinutes()} <sub>mins</sub>
                        &nbsp;{age.getUTCSeconds()} <sub>s</sub>
                    </div>
                </div>
            </div>
            <div id="works_wrapper">
                <div id="works_intro">
                    These are some of the things I work on and have worked on
                </div>
                <div id="works">
                    <Work
                        icon={"fa fa-globe"}
                        title={"WEB PROJECTS"}
                        description={"Some frontend, backend or full stack web projects"}
                        route={"/web_projects"}
                    />
                    <Work
                        icon={"fa-brands fa-java"}
                        title={"JAVA PROJECTS"}
                        description={"A number of desktop programs written in Java on topics and concepts I took interest in"}
                        route={"/java_projects"}
                    />
                    <Work
                        icon={"fa fa-code"}
                        title={"CODING CHALLENGES"}
                        description={"A collection of coding challenges that I solve from time to time"}
                        route={"/coding_challenges"}
                    />
                </div>
            </div>
            <div id="resume_and_contacts">
                <div id="rac_intro">
                    Resume info and contacts
                </div>
                <div id="links">
                    <a
                        href="https://github.com/DynamiteBob17"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fa-brands fa-github"} /> GitHub
                    </a>
                    <a
                        href="https://europa.eu/europass/eportfolio/screen/share/4661b8e5-b55e-4741-87a0-534ca8a9e287?lang=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fa-solid fa-file-lines"} /> Curriculum Vitae
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jan-mlinari%C4%87-0b3688267"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fa-brands fa-linkedin"} /> LinkedIn
                    </a>
                </div>
                <div id="contacts">
                    <a href="tel:+385917510114">
                        <i className={"fa fa-phone"} /> +385917510114
                    </a>
                    <a href="mailto:jan.mlinaric@gmail.com">
                        <i className={"fa fa-envelope"} /> jan.mlinaric@gmail.com
                    </a>
                </div>
                <div id="source_code">
                    <a
                        href="https://github.com/DynamiteBob17/Personal-Portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        [source code for this website]
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
