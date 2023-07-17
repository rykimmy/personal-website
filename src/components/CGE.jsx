import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import cge from '../../tse.png';

function CGE() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="projectImg" src={cge} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Collaborative Graphical Editor</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Collaborative Graphical Editor</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">Java</h5>
                    </div>

                    <p className="projectDescription">This program utilizes a client-server to set up a collaborative graphical editor. Multiple users can draw, edit, and remove sketches with one another in real-time.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/collaborative-graphical-editor">Github</a></p>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}

export default CGE