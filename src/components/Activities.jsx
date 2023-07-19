import ActivityItems from './ActivityItems.jsx';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import Beta from './Beta';
import KSA from './KSA';
import Fern from './Fern';
import Volleyball from './Volleyball'

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

                {/* <div className="activityItem">
                    <h4 className="activityTitle">Fern Cafe</h4>
                    <h5 className="activityPosition">Student Supervisor • March 2021 – Present</h5>
                    <ul className="descriptionContainer">
                        <li className="description">Work a minimum of 10 hours weekly serving coffee, food, smoothies, and acai bowls</li>
                        <li className="description">Responsible for training and overseeing all employees</li>
                        <li className="description">On call to cover any last-minute shift absences</li>
                    </ul>
                </div> */}

            </div>
        </div>
    )
}

export default Activities