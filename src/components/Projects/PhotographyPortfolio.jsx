import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import pp from '../../../camera.png';

function PhotographyPortfolio() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div onClick={handleOpen} className="imgContainer">
                <img className="projectImg" src={pp} />
                <div className="imgText">
                    <div className="text">Photography Portfolio</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Photography Portfolio</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">HTML</h5>
                        <h5 className="projectLanguage">CSS</h5>
                        <h5 className="projectLanguage">React</h5>
                        <h5 className="projectLanguage">Firebase</h5>
                    </div>

                    <p className="projectDescription">As a long-standing photography enthusiast, I decided to build a webapp portfolio displaying some of my work. Leveraging a React frontend and a Firebase backend to hold my photos and their dimensions, I created a simplistic design to exhibit photos I have taken over the years. Due to subscription payments, photos stored in the backend are not currently shown on the webapp.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/photography-portfolio">Github</a></p>
                        <p className="projectLink"><a className="github" target="_blank" href="https://ryankim-photography.netlify.app/">Website</a></p>
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default PhotographyPortfolio