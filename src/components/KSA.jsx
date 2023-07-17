import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import ksa from '../../ksa1.png';

function KSA() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="activityImg" src={ksa} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Korean Student Association</div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="activityTitle">Korean Student Association</h4>
                    <h5 className="activitySubtitle">President</h5>
                    <ul className="activityDescription">
                        <li className="descriptionItem">Oversee social events, club funds, and alumni relations to foster a strong Korean community at Dartmouth</li>
                        <li className="descriptionItem">Instituted new campus-wide events which increased membership by 20%</li>
                        <li className="descriptionItem">Instated organization to the National Korean Student Alliance and Korea Finance Society, granting Dartmouth students internship and scholarship opportunities</li>
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export default KSA