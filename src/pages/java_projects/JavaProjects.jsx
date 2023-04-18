import React from "react";
import './JavaProjects.scss';
import Java from "./Java";

function JavaProjects() {
    return (
        <>
            <p
                style={{
                    position: 'relative',
                    left: '0',
                    margin: '0',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: 'grey',
                    padding: '7px'
                }}
            >
                *project repository links are in the titles
            </p>
            <br></br>
            <div id="java_projects_wrapper">
                <Java
                    link={"https://github.com/DynamiteBob17/Sorting-Algorithms-Visualiser"}
                    name={"Sorting Algorithms Visualiser"}
                    video={"https://drive.google.com/file/d/1K9SKdQmahDoY22hS8GdVRgblg3y5frfv/preview"}
                    videoName={"sav.mp4"}
                />
                <Java
                    link={"https://github.com/DynamiteBob17/Mandelbrot-Set-Viewer"}
                    name={"Mandelbrot Set Viewer"}
                    video={"https://drive.google.com/file/d/1uS5Z0hYD2HUGPr19evmQtBnb5jpwutZq/preview"}
                    videoName={"mandelbrot.mp4"}
                />
                <Java
                    link={"https://github.com/DynamiteBob17/CFR-Screensaver"}
                    name={"Game of Life Presets, Fractal Trees\nand RGB Rain Screensaver"}
                    video={"https://drive.google.com/file/d/1uYW2UQEX0PoHeBSLv7oVA4yQz-T9b5E3/preview"}
                    videoName={"cfr.mp4"}
                />
                <Java
                    link={"https://github.com/DynamiteBob17/Text-To-Speech"}
                    name={"Text-To-Speech"}
                    video={"https://drive.google.com/file/d/1X8o_n2irPIp9sYsSNtM-_Bten73SXCI3/preview"}
                    videoName={"tts.mp4"}
                />
                <Java
                    link={"https://github.com/DynamiteBob17/Snake-Game"}
                    name={"Snake Game"}
                    video={"https://drive.google.com/file/d/1rSL7jooabvl-GhF_3Mvj9AFce1u7kVJf/preview"}
                    videoName={"snake.mp4"}
                />
                <Java
                    link={"https://github.com/DynamiteBob17/Calculator"}
                    name={"Calculator"}
                    video={"https://drive.google.com/file/d/1MlJvfBcUOvvdlZr84HsgKo5wiz3FDQMB/preview"}
                    videoName={"calculator.mp4"}
                />
                <Java
                    link={"https://github.com/DynamiteBob17/Julia-Set-Viewer"}
                    name={"Julia Set Viewer"}
                    video={"https://drive.google.com/file/d/1aUmUrQ-M9ciPX8j-Mz0V9QnX84CbnpIR/preview"}
                    videoName={"julia.mp4"}
                />
            </div>
        </>
    );
}

export default JavaProjects;
