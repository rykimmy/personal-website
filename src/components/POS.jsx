import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import pos from '../../tse.png';

function POS() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="projectImg" src={pos} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Part of Speech Tagger</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Part of Speech Tagger</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">Java</h5>
                    </div>

                    <p className="projectDescription">This project aims to build a learning algorithm that allows for the program to correctly tag parts of speech in text. The program utilizes Hidden Markov Models and Viterbi decoding to tag parts of speech of sentences. It is trained using a training dataset of sentences with words correctly labeled with their part of speech. It is then assessed on unforeseen text to gauge accuracy.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/POS-tagger">Github</a></p>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}

export default POS