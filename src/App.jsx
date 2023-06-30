import React, { useState, useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './styles.css'
import cover from '../cover.jpg'
import Navigation from './components/Navigation'
import About from './components/About'
import { useLocation, useNavigate } from "react-router-dom";

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

function App() {

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  // setTimeout(function () {
  //   window.scrollTo(0, 0);
  // }, 2);

  // window.onbeforeunload = function () {
  //   window.scrollTo(top);
  // };

  // useEffect(() => {
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }


  // // HIGHLIGHTING ACTIVE PAGE ON NAVBAR
  // // Get sections and tags for the nav bar to check their classes
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  // Highlights active page on navbar on scroll
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });
  };

  // window.addEventListener('scroll', () => {
  //   let current = '';
  //   sections.forEach(section => {
  //     const sectionTop = section.offsetTop;
  //     const sectionHeight = section.clientHeight;
  //     if (scrollY >= (sectionTop - sectionHeight / 3)) {
  //       current = section.getAttribute('id');
  //     }
  //   })

  //   navLinks.forEach(link => {
  //     link.classList.remove('active');
  //     if (link.classList.contains(current)) {
  //       link.classList.add('active');
  //     }
  //   });
  // })

  return (
    <div>
      <body>
        <Navigation />

        <section id="home">
          <img className="coverPhoto" src={cover} />
          <div className="coverTitle">Ryan Kim</div>
          <div className="coverDescription">Aspiring Software Engineer</div>
          <div className="coverDescription2">Background Pc: Hong Kong Sunset by Ryan Kim</div>
        </section>

        {/* <section id="about">About</section> */}
        <About />
        <section id="education">Education</section>
        <section id="experience">Experience</section>
        <section id="projects">Projects</section>
        <section id="activities">Activities</section>

        {/* <scrip src='script.js'></scrip> */}
      </body>
    </div>
  );
};

export default App
