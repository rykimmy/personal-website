import ActivityItems from './ActivityItems.jsx';
import React, { useState, useEffect, useLayoutEffect } from 'react';

function Activities() {

    return (
        <div>
            <h2 className="sectionTitle">Activities</h2>
            <h3 className="sectionSubtitle">Interests and positions.</h3>
            <div className="activitiesContainer">

                {ActivityItems.map((item, index) => {
                    return (
                        <div className="activityItem">
                            <h4 className="activityTitle">{item.name}</h4>
                            <h5 className="activityPosition">{item.position}</h5>

                            <ul className="descriptionContainer">
                                {item.description.map((description, ind) => {
                                    return (
                                        <li className="description">{description}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Activities