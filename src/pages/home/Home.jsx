import './Home.css';
import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const birthday = new Date('2000/01/08');

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
                    How old I am
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
                    These are some of the personal things I work on and have worked on
                </div>
                <div id="works">
                    <NavLink className={"work"} to="/web_projects">
                        <div className={"work_title"}>
                            <i className={"fa fa-globe"} /> WEB PROJECTS
                        </div>
                        <div className={"work_desc"}>
                            Some frontend, backend or full stack web projects
                        </div>
                    </NavLink>
                    <NavLink className={"work"} to="/java_projects">
                        <div className={"work_title"}>
                            <i className={"fa-brands fa-java"} /> JAVA PROJECTS
                        </div>
                        <div className={"work_desc"}>
                            A number of desktop programs written in Java on topics
                            and concepts I took interest in
                        </div>
                    </NavLink>
                    <NavLink className={"work"} to="/coding_challenges">
                        <div className={"work_title"}>
                            <i className={"fa fa-code"} /> CODING CHALLENGES
                        </div>
                        <div className={"work_desc"}>
                            A collection of coding challenges that I solve from time to time.
                        </div>
                    </NavLink>
                </div>
            </div>
            <div id="resume_and_contacts">
                <div id="rac_intro">
                    Resume info and contacts
                </div>
                <div id="links">
                    <a
                        href="https://www.freecodecamp.org/PickleEaterJim33"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fa-brands fa-free-code-camp"} /> freeCodeCamp
                    </a>
                    <a
                        href="https://github.com/PickleEaterJim33"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fa-brands fa-github"} /> GitHub
                    </a>
                    <a
                        href="https://europa.eu/europass/eportfolio/screen/share/ae8a8758-b621-4239-9a54-038de74a28a8?lang=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Curriculum Vitae
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
                        href="https://github.com/PickleEaterJim33/Personal-Portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        source code for this website
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
