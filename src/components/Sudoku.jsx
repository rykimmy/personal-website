import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import tse from '../../tse.png';

function Sudoku() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="projectImg" src={tse} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Sudoku</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Sudoku</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">C</h5>
                        <h5 className="projectLanguage">Python</h5>
                    </div>

                    <p className="projectDescription">A program that solves sudoku puzzles given through standard input as well as creates original, single-solution sudoku puzzles for users to solve. This program utilizes a back-tracking algorithm to both solve and create puzzles.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/sudoku">Github</a></p>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}

export default Sudoku