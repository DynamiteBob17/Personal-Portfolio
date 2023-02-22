import React from "react";
import './WebProjects.scss';
import Web from "./Web";

function WebProjects() {
    return (
        <>
            <p
                style={{
                    position: 'relative',
                    left: '0',
                    margin: '7px',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: 'grey',
                    padding: '7px'
                }}
            >
                *some hosted projects and services<br></br> might need some time to wake up and load
            </p>
            <br></br>
            <div id="web_projects_wrapper">
                <Web
                    link={"https://mlinka-pintclone.web.app/"}
                    name={"Pinterest Clone, sort of\n(Vite React + Express + MongoDB)"}
                    screenshot={"https://i.ibb.co/Pwwddm0/Screenshot-5.png"}
                    alt={"pinterest-clone"}
                    source={"https://github.com/DynamiteBob17/Pinterest-Clone-Client"}
                    sourceComment={"server code link in README"}
                />
                <Web
                    link={"https://pm-app-mlinka.web.app/"}
                    name={"Project Management App\n(CRA + Express + PostgreSQL)"}
                    screenshot={"https://i.ibb.co/6nVV0ws/Screenshot-3.png"}
                    alt={"project-management-app"}
                    source={"https://github.com/DynamiteBob17/Project-Management-Client"}
                    sourceComment={"server code link and test users in README"}
                />
                <Web
                    link={"https://sudoku-solver.dynamitebob17.repl.co/"}
                    name={"Sudoku Solver with DFS algorithm\n(tested with Mocha Chai)"}
                    screenshot={"https://i.ibb.co/T1kmD6D/Screenshot-17.png"}
                    alt={"sudokusolver"}
                    source={"https://github.com/DynamiteBob17/Sudoku-Solver"}
                />
                <Web
                    link={"https://personal-library.dynamitebob17.repl.co/"}
                    name={"Personal Library\n(tested with Mocha Chai)"}
                    screenshot={"https://i.ibb.co/c855Q5Z/Screenshot-18.png"}
                    alt={"pagescrshot"}
                    source={"https://github.com/DynamiteBob17/Personal-Library"}
                />
                <Web
                    link={"https://github.com/DynamiteBob17/Databases-and-Scripts"}
                    name={"PostgreSQL and Bash script exercises"}
                    screenshot={"https://i.ibb.co/jHqTbYH/Screenshot-15.png"}
                    alt={"repo"}
                    source={"https://github.com/DynamiteBob17/Databases-and-Scripts"}
                />
                <Web
                    link={"https://codepen.io/DynamiteBob17/full/eYrVaNr"}
                    name={"Treemap with D3.js"}
                    screenshot={"https://i.ibb.co/GFjtKSy/Screenshot-18.png"}
                    alt={"treemap"}
                    source={"https://codepen.io/DynamiteBob17/pen/eYrVaNr"}
                />
                <Web
                    link={"https://codepen.io/DynamiteBob17/full/xxjYagY"}
                    name={"Choropleth with D3.js"}
                    screenshot={"https://i.ibb.co/LgZxDjz/Screenshot-19.png"}
                    alt={"choropleth"}
                    source={"https://codepen.io/DynamiteBob17/pen/xxjYagY"}
                />
                <Web
                    link={"https://codepen.io/DynamiteBob17/full/LYmeOjO"}
                    name={"Scatterplot graph with D3.js"}
                    screenshot={"https://i.ibb.co/Bt0Hks9/Screenshot-17.png"}
                    alt={"scatterplot"}
                    source={"https://codepen.io/DynamiteBob17/pen/LYmeOjO"}
                />
                <Web
                    link={"https://codepen.io/DynamiteBob17/full/ZEoXZzr"}
                    name={"Calculator with React"}
                    screenshot={"https://i.ibb.co/fXZ631c/Screenshot-15.png"}
                    alt={"calculator"}
                    source={"https://codepen.io/DynamiteBob17/pen/ZEoXZzr"}
                />
                <Web
                    link={"https://codepen.io/DynamiteBob17/full/yLjbzxo"}
                    name={"Witcher quotes with jQuery"}
                    screenshot={"https://i.ibb.co/R9HY4qQ/Screenshot-16.png"}
                    alt={"quotes"}
                    source={"https://codepen.io/DynamiteBob17/pen/yLjbzxo"}
                />
                <Web
                    link={"https://codepen.io/DynamiteBob17/full/dyeWrrM"}
                    name={"Markdown previewer with React"}
                    screenshot={"https://i.ibb.co/zGQWhSp/Screenshot-14.png"}
                    alt={"mdpre"}
                    source={"https://codepen.io/DynamiteBob17/pen/dyeWrrM"}
                />
            </div>
        </>
    );
}

export default WebProjects;
