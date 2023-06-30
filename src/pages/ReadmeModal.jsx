import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function ReadmeModal({ repo }) {
    const [show, setShow] = useState(false);
    const [readme, setReadme] = useState('');

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = async () => {
        setShow(true);
        if (readme === '') {
            await loadReadme();
        }
    };

    const loadReadme = async () => {
        try {
            const res = await fetch(`https://raw.githubusercontent.com/DynamiteBob17/${repo}/main/README.md`);
            setReadme(await res.text());
        } catch (e) {
            setReadme(e);
        }
    }

    return (
        <>
            <Button
                variant="outline-secondary"
                onClick={handleShow}
                size="sm"
            >
                View README
            </Button>
            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>README of repository {repo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        readme === ''
                            ? <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            : <ReactMarkdown children={readme}/>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ReadmeModal;

