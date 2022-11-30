import React from "react";
import './WebProjects.css';
import Web from "./Web";

function WebProjects() {
    return (
        <div id="web_projects_wrapper">
            <Web
                link={"https://www.google.com"}
                name={"Name"}
                screenshot={"https://i.pinimg.com/736x/cc/9a/ca/cc9aca7d72c497b0016e18e8bdb9f2d6.jpg"}
                alt={"?"}
                source={"https://github.com/PickleEaterJim33"} 
            />
            <Web
                link={"https://www.google.com"}
                name={"NameName Name"}
                screenshot={"https://www.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg"}
                alt={"?"}
                source={"https://github.com/PickleEaterJim33"} 
            />
            <Web
                link={"https://www.google.com"}
                name={"Name Name"}
                screenshot={"https://www.investors.com/wp-content/uploads/2021/04/Stock-bidensunglasses-01-shutt.jpg"}
                alt={"?"}
                source={"https://github.com/PickleEaterJim33"} 
            />
            <Web
                link={"https://www.google.com"}
                name={"NameNameNameName"}
                screenshot={"https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg"}
                alt={"?"}
                source={"https://github.com/PickleEaterJim33"} 
            />
        </div>
    );
}

export default WebProjects;
