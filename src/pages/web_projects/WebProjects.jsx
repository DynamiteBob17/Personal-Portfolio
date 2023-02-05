import React from "react";
import './WebProjects.scss';
import Web from "./Web";

function WebProjects() {
    return (
        <>
            <p
                style={{
                    position: 'absolute',
                    right: '0',
                    margin: '0',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: 'grey',
                    padding: '5px 5px 0 0'
                }}
            >
                *some hosted projects and services<br></br> might need some time to wake up and load
            </p>
            <br></br>
            <div id="web_projects_wrapper">
                <Web
                    link={"https://pintclonemlinka.web.app/"}
                    name={"Pinterest Clone, sort of\n(Vite React + Express + MongoDB)"}
                    screenshot={"https://i.pinimg.com/originals/19/0d/44/190d447da8ee306ea080b72107c757af.jpg"}
                    alt={"pinterest-clone"}
                    source={"https://github.com/DynamiteBob17/Pinterest-Clone-Client"}
                    sourceComment={"server code link in README"}
                />
                <Web
                    link={"https://pm-pickle.firebaseapp.com/"}
                    name={"Project Management App\n(CRA + Express + PostgreSQL)"}
                    screenshot={"https://learn.g2crowd.com/hubfs/iStock-1135541613.jpg"}
                    alt={"project-management-app"}
                    source={"https://github.com/DynamiteBob17/Project-Management-Client"}
                    sourceComment={"server code link and test users in README"}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/DynamiteBob17/quality-assurance-v7"}
                    name={"Quality Assurance\n+ backend and APIs"}
                    screenshot={"https://i.ibb.co/sqBP8LL/mocha-Chai.png"}
                    alt={"mocha-Chai"}
                    fccSources={[
                        'https://fcc-converter.onrender.com',
                        'https://fcc-issuetracker.onrender.com',
                        'https://fcc-library-jb9a.onrender.com',
                        'https://fcc-sudoku.onrender.com',
                        'https://fcc-translator.onrender.com'
                    ]}
                    fccComments={[
                        'Metric-Imperial Converter',
                        'Issue Tracker',
                        'Personal Library',
                        'Sudoku Solver',
                        'American-British Translator'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/DynamiteBob17/back-end-development-and-apis"}
                    name={"Backend and APIs"}
                    screenshot={"https://i.ibb.co/LYcf0J1/node-Express-Mongodb.png"}
                    alt={"node-Express-Mongodb"}
                    fccSources={[
                        'https://replit.com/@JanMlinaric/FCC-Timestamp-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-Headparser-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-URL-Shortener-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-Exercise-Tracker-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-File-Metadata-Project?v=1'
                    ]}
                    fccComments={[
                        'Timestamp Microservice',
                        'Request Header Parser Microservice',
                        'URL Shortener Microservice',
                        'Exercise Tracker',
                        'File Metadata Microservice'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/DynamiteBob17/relational-database-v8"}
                    name={"Relational Database"}
                    screenshot={"https://i.ibb.co/NTcfnPj/image-1.png"}
                    alt={"psql-Bash-Git"}
                    fccSources={[
                        'https://github.com/DynamiteBob17/FCC/blob/main/Celestial%20Bodies%20Database/universe.sql',
                        'https://github.com/DynamiteBob17/FCC/tree/main/World%20Cup%20Database',
                        'https://github.com/DynamiteBob17/FCC/tree/main/Salon%20Appointment%20Scheduler',
                        'https://github.com/DynamiteBob17/Periodic-Table-FCC',
                        'https://github.com/DynamiteBob17/Number-Guessing-Game-FCC'
                    ]}
                    fccComments={[
                        'Celestial Bodies Database',
                        'World Cup Database',
                        'Salon Appointment Scheduler',
                        'Periodic Table Database',
                        'Number Guessing Game'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/DynamiteBob17/data-visualization"}
                    name={"Data Visualization"}
                    screenshot={"https://cdn.dribbble.com/users/22018/screenshots/2456036/d3.png"}
                    alt={"d3"}
                    fccSources={[
                        'https://codepen.io/DynamiteBob17/full/xxjpOZq',
                        'https://codepen.io/DynamiteBob17/full/LYmeOjO',
                        'https://codepen.io/DynamiteBob17/full/yLjpmLV',
                        'https://codepen.io/DynamiteBob17/full/xxjYagY',
                        'https://codepen.io/DynamiteBob17/full/eYrVaNr'
                    ]}
                    fccComments={[
                        'Bar Chart',
                        'Scatterplot Graph',
                        'Heat Map',
                        'Choropleth Map',
                        'Treemap Diagram'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/DynamiteBob17/front-end-development-libraries"}
                    name={"Frontend Libraries"}
                    screenshot={"https://i.ibb.co/JxVL3KK/frontend.png"}
                    alt={"frontend"}
                    fccSources={[
                        'https://codepen.io/DynamiteBob17/full/yLjbzxo',
                        'https://codepen.io/DynamiteBob17/full/dyeWrrM',
                        'https://codepen.io/DynamiteBob17/full/poVrrmm',
                        'https://codepen.io/DynamiteBob17/full/ZEoXZzr',
                        'https://codepen.io/DynamiteBob17/full/PoeOZoP'
                    ]}
                    fccComments={[
                        'Random Quote Machine',
                        'Markdown Previewer',
                        'Drum Machine',
                        'JavaScript Calculator',
                        '25 + 5 Clock'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/DynamiteBob17/javascript-algorithms-and-data-structures"}
                    name={"JavaScript Algorithms\nand Data Structures"}
                    screenshot={"https://i.ibb.co/vXVxzjy/javascript.png"}
                    alt={"javascript"}
                    source={"https://www.freecodecamp.org/certification/DynamiteBob17/javascript-algorithms-and-data-structures"}
                    sourceComment={"practice projects at same link"}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/DynamiteBob17/responsive-web-design"}
                    name={"Responsive Web Design"}
                    screenshot={"https://i.ibb.co/xJwt4G0/htmlCss.png"}
                    alt={"html-Css"}
                    source={"https://www.freecodecamp.org/certification/DynamiteBob17/responsive-web-design"}
                    sourceComment={"practice projects at same link"}
                />
            </div>
        </>
    );
}

export default WebProjects;
