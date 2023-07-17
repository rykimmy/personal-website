import ActivityItems from './ActivityItems.jsx';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import Beta from './Beta';
import KSA from './KSA';
import Fern from './Fern';
import Volleyball from './Volleyball'

function Activities() {


    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <div>
            <h2 className="sectionTitle">Activities</h2>
            <h3 className="sectionSubtitle">Interests and positions.</h3>
            <div className="activitiesContainer">

                <Beta className="activityItem" />
                <KSA className="activityItem" />
                <Fern className="activityItem" />
                <Volleyball className="activityItem" />

                {/* <div>
                    <img className="activityImg" onClick={handleOpen} src={ksa} />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <h4 className="activityTitle">KSA</h4>
                        
                    </Modal>
                </div> */}

            </div>
        </div>
    )
}

export default Activities