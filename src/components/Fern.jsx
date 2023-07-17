import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import fern from '../../fern.jpeg';

function Fern() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="activityImg" src={fern} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Fern Cafe</div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="activityTitle">Fern Cafe</h4>
                    <h5 className="activitySubtitle">Student Supervisor</h5>
                    <ul className="activityDescription">
                        <li className="descriptionItem">Work a minimum of 10 hours weekly serving coffee, food, smoothies, and acai bowls</li>
                        <li className="descriptionItem">Responsible for training and overseeing all employees</li>
                        <li className="descriptionItem">On call to cover any last-minute shift absences</li>
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export default Fern