import React from "react";
import './WebProjects.scss';
import Web from "./Web";

function WebProjects() {
    return (
        <>
            <p
                style={{
                    position: 'absolute',
                    margin: '0',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: 'grey',
                    padding: '5px 0 0 5px'
                }}
            >
                *some hosted projects and services<br></br> might need some time to wake up and load
            </p>
            <br></br>
            <div id="web_projects_wrapper">
                <Web
                    link={"https://pm-pickle.firebaseapp.com/"}
                    name="Project Management App"
                    screenshot={"https://learn.g2crowd.com/hubfs/iStock-1135541613.jpg"}
                    alt={"project-management-app"}
                    source={"https://github.com/PickleEaterJim33/Project-Management-Client"}
                    sourceComment={"api link and test users in README"}
                />
                <Web
                    link={"https://imgup-pickle.firebaseapp.com/"}
                    name="Image Upload App"
                    screenshot={"https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"}
                    alt={"image-upload-app"}
                    source={"https://github.com/PickleEaterJim33/Image-Upload-Client"}
                    sourceComment={"api link in README"}
                />
                <Web
                    link={"https://pickle-chat.onrender.com"}
                    name="Socket.io Chat Demo"
                    screenshot={"https://miro.medium.com/max/1400/1*tWm33yhceKIL22QqOORu2w.png"}
                    alt={"pickle-chat"}
                    source={"https://github.com/PickleEaterJim33/Socket-Chat-Demo"}
                    sourceComment={"todo: add more features"}
                />
                <Web
                    link={"https://pickle-stripe.onrender.com"}
                    name="Stripe Payment Demo"
                    screenshot={"https://pbs.twimg.com/profile_images/1503494829094756357/ihaECs5p_400x400.jpg"}
                    alt={"stripe-payment-demo"}
                    source={"https://github.com/PickleEaterJim33/Stripe-Test-Payment"}
                    sourceComment={"use test cards"}
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
        </>
    );
}

export default WebProjects;
