import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import tse from '../../tse.png';

function TSE() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="imgContainer">
                <img className="projectImg" src={tse} />
                <div className="imgText">
                    <div className="text" onClick={handleOpen}>Tiny Search Engine</div>
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