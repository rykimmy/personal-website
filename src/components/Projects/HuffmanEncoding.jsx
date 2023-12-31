import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import huffman from '../../../file.png';

function HuffmanEncoding() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div onClick={handleOpen} className="imgContainer">
                <img className="projectImg" src={huffman} />
                <div className="imgText">
                    <div className="text">Huffman Encoding</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Huffman Encoding</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">Java</h5>
                    </div>

                    <p className="projectDescription">A program that takes a text file and compresses and decompresses the file. It uses Huffman Encoding to compress and decompress the file without any loss.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/huffman-encoding">Github</a></p>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}

export default HuffmanEncoding