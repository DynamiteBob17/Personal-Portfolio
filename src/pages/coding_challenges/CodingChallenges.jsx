import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import "./CodingChallenges.scss";
import Challenge from "./Challenge";

const octokit = new Octokit({
    auth: '',
    userAgent: 'DynamiteBob17'
});

function CodingChallenges() {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        async function onLoad() {
            await octokit.request(
                'GET /repos/{owner}/{repo}/contents/{path}', {
                    owner: 'DynamiteBob17',
                    repo: 'Coding-Challenges',
                    path: '.'
                }
            ).then(result => {
                for (let i = 1; i < result.data.length; ++i) {
                    fetch(result.data[i].download_url)
                        .then(res => res.text())
                        .then(
                            res => {
                                setChallenges(prevState => {
                                    let newChall = {
                                        filename: result.data[i].name,
                                        content: res
                                    }

                                    return prevState.some(chall => chall.filename === newChall.filename)
                                        ? prevState
                                        : [...prevState, newChall].sort((a, b) => a.filename.localeCompare(b.filename));
                                });
                            },
                            err => {
                                setChallenges(prevState => {
                                    let newChall = {
                                        filename: result.data[i].name,
                                        content: 'Error: could not load file content'
                                    }

                                    return prevState.some(chall => chall.filename === newChall.filename)
                                        ? prevState
                                        : [...prevState, newChall].sort((a, b) => a.filename.localeCompare(b.filename));
                                });
                            }
                        );
                }
            }).catch(err => {
                setChallenges([]);
            });
        }
        onLoad();
    }, []);
    return (
        <div id="challenges_wrapper">
            <div id="top_bar">
                <span id="title">Coding Challenges</span>
                <a
                    id="repo_link"
                    href="https://github.com/DynamiteBob17/Coding-Challenges"
                    target="_blank"
                    rel="noreferrer"
                >
                    [repository]
                </a>
            </div>
            <div id="challenges">
                {challenges.length === 0
                    ? <div id="challenges_loading"></div>
                    : challenges === null
                        ? <div id="loading_error">Error: could not access challenges</div>
                        : challenges.map((chall, idx) => {
                            return <Challenge
                                key={`key${idx}`}
                                idx={idx}
                                filename={chall.filename}
                                code={chall.content}
                            />;
                        })}
            </div>
        </div>
    );
}

export default CodingChallenges;
