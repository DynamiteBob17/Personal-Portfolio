import React from "react";
import './WebProjects.scss';
import Web from "./Web";

function WebProjects() {
    return (
        <div id="web_projects_wrapper">
            <Web
                link={"https://soft-lead.firebaseapp.com/"}
                name="Project Managament App"
                screenshot={"https://learn.g2crowd.com/hubfs/iStock-1135541613.jpg"}
                alt={"project-management-app"}
                source={"https://github.com/PickleEaterJim33/project-management-client"}
                sourceComment={"work in progress"}
            />
            <Web
                link={"https://www.freecodecamp.org/certification/PickleEaterJim33/quality-assurance-v7"}
                name={"Quality Assurance"}
                screenshot={"https://i.ibb.co/sqBP8LL/mocha-Chai.png"}
                alt={"mocha-Chai"}
                source={"https://www.freecodecamp.org/certification/PickleEaterJim33/quality-assurance-v7"}
                sourceComment={"located at the same link"}
            />
            <Web
                link={"https://www.freecodecamp.org/certification/PickleEaterJim33/back-end-development-and-apis"}
                name={"Backend and APIs"}
                screenshot={"https://i.ibb.co/LYcf0J1/node-Express-Mongodb.png"}
                alt={"node-Express-Mongodb"}
                source={"https://www.freecodecamp.org/certification/PickleEaterJim33/back-end-development-and-apis"}
                sourceComment={"located at the same link"}
            />
            <Web
                link={"https://www.freecodecamp.org/certification/PickleEaterJim33/relational-database-v8"}
                name={"Relational Database"}
                screenshot={"https://i.ibb.co/NTcfnPj/image-1.png"}
                alt={"psql-Bash-Git"}
                source={"https://www.freecodecamp.org/certification/PickleEaterJim33/relational-database-v8"}
                sourceComment={"solution=source"}
            />
            <Web
                link={"https://www.freecodecamp.org/certification/PickleEaterJim33/data-visualization"}
                name={"Data Visualization"}
                screenshot={"https://cdn.dribbble.com/users/22018/screenshots/2456036/d3.png"}
                alt={"d3"}
                source={"https://www.freecodecamp.org/certification/PickleEaterJim33/data-visualization"}
                sourceComment={"codepen pens viewed in editor"}
            />
            <Web
                link={"https://www.freecodecamp.org/certification/PickleEaterJim33/front-end-development-libraries"}
                name={"Frontend Libraries"}
                screenshot={"https://i.ibb.co/JxVL3KK/frontend.png"}
                alt={"frontend"}
                source={"https://www.freecodecamp.org/certification/PickleEaterJim33/front-end-development-libraries"}
                sourceComment={"codepen pens viewed in editor"}
            />
            <Web
                link={"https://www.freecodecamp.org/certification/PickleEaterJim33/javascript-algorithms-and-data-structures"}
                name={"JavaScript"}
                screenshot={"https://i.ibb.co/vXVxzjy/javascript.png"}
                alt={"javascript"}
                source={"https://www.freecodecamp.org/certification/PickleEaterJim33/javascript-algorithms-and-data-structures"}
                sourceComment={"solution=source"}
            />
            <Web
                link={"https://www.freecodecamp.org/certification/PickleEaterJim33/responsive-web-design"}
                name={"Responsive Web Design"}
                screenshot={"https://i.ibb.co/xJwt4G0/htmlCss.png"}
                alt={"html-Css"}
                source={"https://www.freecodecamp.org/certification/PickleEaterJim33/responsive-web-design"}
                sourceComment={"located at the same link"}
            />
        </div>
    );
}

export default WebProjects;
