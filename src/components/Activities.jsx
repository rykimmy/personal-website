import ActivityItems from './ActivityItems.jsx'
import beta from '../../beta.png'
import React, { useState, useEffect, useLayoutEffect } from 'react'

function Activities() {

    // // Get the modal
    // var modal = document.getElementById("betaModal");

    // // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks on the button, open the modal
    // btn.onclick = function () {
    //     modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

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