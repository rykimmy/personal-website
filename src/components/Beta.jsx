import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import beta from '../../beta.png';

function Beta() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="activityImg" src={beta} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Beta Alpha Omega</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="activityTitle">Beta Alpha Omega</h4>
                    <h5 className="activitySubtitle">Diversity, Equity, and Inclusion Chair</h5>
                    <ul className="activityDescription">
                        <li className="descriptionItem">Attended lectures, discussions, and seminars aimed at tackling issues of diversity within Greek life</li>
                        <li className="descriptionItem">Facilitated house-wide conversations on diversity and inclusivity to address areas of improvement</li>
                        <li className="descriptionItem">Mandated implicit bias training for all house members to confront biases leading to lack of diversity</li>
                        <li className="descriptionItem">Spearheaded joint social events with affinity groups to foster connections with various groups on campus</li>
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export default Beta