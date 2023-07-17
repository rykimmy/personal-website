import ProjectItems from './ProjectItems';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '@mui/material/Modal';
import TSE from './TSE';
import Sudoku from './Sudoku';
import CGE from './CGE';
import POS from './POS';
import PhotographyPortfolio from './PhotographyPortfolio';
import Greenbox from './Greenbox';

function Projects() {
    return (
        <div>
            <h2 className="sectionTitle">Projects</h2>
            <h3 className="sectionSubtitle">Some of my creations.</h3>
            <div className="projectContainer">

                <TSE />
                <Sudoku />
                <CGE />
                <POS />
                <PhotographyPortfolio />
                <Greenbox />


                {/* {ProjectItems.map((item, index) => {
                    return (
                        <div className="projectItem" key={item.project}>

                            <h4 className="projectTitle">{item.project}</h4>

                            <div className="languageDetails">
                                {item.languages.map((lan, index) => {
                                    return (
                                        <h5 className="projectLanguage">{lan.name}</h5>
                                    );
                                })}
                            </div>

                            <p className="projectDescription">{item.description}</p>

                            <div className="linkContainer">
                                {item.links.map((li, index) => {
                                    return (
                                        <p className="projectLink"><a className="github" target="_blank" href={li.link}>{li.name}</a></p>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })} */}
            </div>
        </div>
    )
}

export default Projects