import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import pw from '../../../website.png';

function PersonalWebsite() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div onClick={handleOpen} className="imgContainer">
                <img className="projectImg" src={pw} />
                <div className="imgText">
                    <div className="text">Personal Website</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Personal Website</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">HTML</h5>
                        <h5 className="projectLanguage">CSS</h5>
                        <h5 className="projectLanguage">React</h5>
                    </div>

                    <p className="projectDescription">What you are seeing right now! A personal website applying my skills in web development and UI/UX that displays my portfolio.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/personal-website">Github</a></p>
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default PersonalWebsite