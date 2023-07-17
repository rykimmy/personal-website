import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import greenbox from '../../tse.png';

function Greenbox() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="projectImg" src={greenbox} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Greenbox Storage Widgets</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Greenbox Storage Widgets</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">React</h5>
                        <h5 className="projectLanguage">HTML</h5>
                        <h5 className="projectLanguage">CSS</h5>
                    </div>

                    <p className="projectDescription">A simple webapp that takes data from the storage company's database––accounts, number of items to be stored, pickup and dropoff dates, and cost per month––in the form of a JSON file and showcases animated widgets to display monthly revenue, conversion rates, and pickup information based on selected school.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/greenbox-storage-widgets">Github</a></p>
                        <p className="projectLink"><a className="github" target="_blank" href="https://greenbox-widgets.netlify.app/">Website</a></p>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}

export default Greenbox