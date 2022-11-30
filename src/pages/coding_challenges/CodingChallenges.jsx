import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import "./CodingChallenges.css";
import Challenge from "./Challenge";

const octokit = new Octokit({
    auth: process.env.REACT_APP_PAT,
    userAgent: 'PickleEaterJim33'
});

function CodingChallenges() {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        async function onLoad() {
            await octokit.request(
                'GET /repos/{owner}/{repo}/contents/{path}', {
                    owner: 'PickleEaterJim33',
                    repo: 'Coding-Exercises',
                    path: '.'
                }
            ).then(result => {
                for (let i = 1; i < result.data.length; ++i) {
                    fetch(result.data[i].download_url)
                        .then(res => res.text())
                        .then(
                            res => {
                                setChallenges(prevState => [...prevState, {
                                    filename: result.data[i].name,
                                    content: res
                                }]);
                            },
                            err => {
                                setChallenges(prevState => [...prevState, {
                                    filename: result.data[i].name,
                                    content: 'Error: could not load file content'
                                }]);
                            }
                        );
                }
            }).catch(err => {
                setChallenges(null);
            });
        }
    onLoad();
    }, []);

    if (challenges.length === 0) {
        return (
            <div id="challenges_loading">
                Loading...
            </div>
        );
    } else if (challenges === null) {
        return (
            <div id="loading_error">
                Error: could not access challenges
            </div>
        )
    } else {
        return (
            <div id="challenges_wrapper">
                <div id="top_bar">
                    <span id="title">Coding Challenges</span>
                    <a
                        id="repo_link"
                        href="https://github.com/PickleEaterJim33/Coding-Exercises"
                        target="_blank"
                        rel="noreferrer"
                    >
                        [repository]
                    </a>
                </div>
                <div id="challenges">
                    {challenges.map((chall, idx) => {
                        return <Challenge
                            key={`key${idx}`}
                            idx={idx}
                            filename={chall.filename}
                            content={chall.content}
                        />;
                    })}
                </div>
            </div>
        );
    }
}

export default CodingChallenges;
