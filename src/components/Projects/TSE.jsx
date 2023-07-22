import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import tse from '../../../tse.png';

function TSE() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div onClick={handleOpen} className="imgContainer">
                <img className="projectImg" src={tse} />
                {/* <img className="projectImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nO3cT08UMRzG8eGgkrgYPCr6FkTfi4kXFTiYYPRqBELw5Yjxzxr1LfgX9SpeTPQiXBTZ9aTJ1/ykbIbSlZ2ZLlvT55OQbAZaOn0y7UwHWhQiIiIiIiIiIiIiIiIiIiIiIrUBR4GbwCugiwyb9fFL4Ib1vR/GaeD90Jsg/bwDTpWvDIUxem+BI4UbpiQN1ws3Z5Q9sSGs/mwkgwCmgKde37+wb3S8g1MD1SiNAWe8vt+2g3s0/zVSxb7+VyCjpUASo0ASo0ASo0ASo0ASo0ASo0A8wElgDngMrLtV2K773AZmgcliSBSIA4wDi8DWAGtM34HbVqaITIEUvdcNr6nOVsXPKpD4YXyhvs+9dxdx2pPv0gk7w9RaoJO/AkvANHDcfU27YxuBn7c3fccitSnrQBYDnXsXaP2jTAtYDZS7FalNeQbCzt3UViCMsQHKjgVC+Rbj7ivnQOYCw1SrQvmJwPA1E6Fd2QbS9k51qUYdy14dDyO0K9tAPnqneq5GHee9OtYjtCvbQDreqbZq1GETfFknQrsUSINATrBXV4GkNWR9qtueUp3ZDlntIUzq9yO0K9tAZr1T3ahx27vp1XEtQruyDWTSrdqWrVZ4MLznlf1hIUVoV56BGLeETiCUiQOuDD8Ms1BEkHsg432W3Tfd/HDB3dq23OflwDC160qkNuUbSGn53ZbQm/oFXCoayj4QY+8z3BJ6U7+By0UDCsSx9xm2hO5WbQ9iE/gCcNVdGdGuFAUSvvuaAR4BH9wSy0976AMe2K1tedK3zo8ZigKJALgYCKXW8KVAEgtFgSQWigKJrM+cslKhfN7PIYdwpdypWFaBDPFKWalRToGkRIEkRoEkRoEkRoEkRoEkRoEkRoH8B4Fse8e0+cyIN5/xt2eyLYMUyuGE8Sy0PZPt+SdpmN/d4s/2/JPRevN3i7/SS3/b809GY23fP5JaOrbnH/A88Kf7El/H9fV878oQERERERERERERERERERERESnq+AO74G4S/wT/xQAAAABJRU5ErkJggg==" /> */}
                <div className="imgText">
                    <div className="text">Tiny Search Engine</div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalItem">
                    <h4 className="projectTitle">Tiny Search Engine</h4>

                    <div className="languageDetails">
                        <h5 className="projectLanguage">C</h5>
                    </div>

                    <p className="projectDescription">A tiny search engine that encompasses three components: a crawler, indexer, and querier. The crawler takes a seed URL, explores the page for more links, and continuously crawls pages. The indexer scrolls through all crawled pages and creates an index that maps unique words to their frequencies. Finally, the querier takes search queries and ranks all of the crawled pages based on the search query and the index of words.</p>

                    <div className="linkContainer">
                        <p className="projectLink"><a className="github" target="_blank" href="https://github.com/rykimmy/tse-rykimmy">Github</a></p>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}

export default TSE