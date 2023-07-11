import ActivityItems from './ActivityItems.jsx'
import beta from '../../beta.png'
import React, { useState, useEffect, useLayoutEffect } from 'react'

function Activities() {

    return (
        <div>
            <h2 className="sectionTitle">Activities</h2>
            <h3 className="sectionSubtitle">Interests and positions.</h3>
            <div className="activitiesContainer">
                {/* {ActivityItems.map((item, index) => {
                    return (
                        <div className="activityItem" key={item.name}></div>
                    )
                })} */}
                <div className="activityItem">
                    {/* <img src={beta} id="myBtn" className="activityImg" /> */}
                    <button id="myBtn">Open Modal</button>

                    <div id="betaModal" className="modal">
                        <div className="betaContent">
                            <span className="close">&times;</span>
                            <h4 className="activityTitle">Beta Alpha Omega</h4>
                            {/* <h5 className="activityPosition">Diversity, Equity, and Inclusion Chair</h5> */}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Activities