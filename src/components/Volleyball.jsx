import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import vb from '../../volleyball.jpg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Volleyball() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="activityImg" src={vb} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Dartmouth Men's Volleyball</div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="activityTitle">Dartmouth Men's Volleyball</h4>
                    <h5 className="activitySubtitle">Team Libero</h5>
                    <ul className="activityDescription">
                        <li className="descriptionItem">Selected as team libero for the season</li>
                        <li className="descriptionItem">Participate in year-long weekly practices and interscholastic competitions</li>
                        <li className="descriptionItem">Attend annual National Collegiate Volleyball Federation championship</li>
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export default Volleyball