import './Home.scss';
import Work from "./Work";

function Home() {
    return (
        <div id="homepage">
            <div id="intro">
                <div id="hello">
                    Hello, I'm Jan
                </div>
                <div id="intro_desc">
                    A software developer
                </div>
            </div>
            <div id="works_wrapper">
                <div id="works_intro">
                    Projects<br/>(some haven't been maintained or updated for a while)
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
                </div>
            </div>
            <div id="resume_and_contacts">
                <div id="rac_intro">
                    Resume info, relevant links and contacts
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
                        href="https://europa.eu/europass/eportfolio/screen/share/5bf7829f-236b-4c26-bcd6-6ae44b9b33f9?lang=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fa-solid fa-file-lines"} /> Curriculum Vitae
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jan-mlinari%C4%87-b42b9927a"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fa-brands fa-linkedin"} /> LinkedIn
                    </a>
                    <a
                        href="https://leetcode.com/DynamiteBob17/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={"fas fa-code"} /> LeetCode
                    </a>
                </div> {/* Closing div for links */}
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
