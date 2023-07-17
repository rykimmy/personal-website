import React, { useState, useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './styles.css'
import cover from '../cover.jpg'
import Navigation from './components/Navigation'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Activities from './components/Activities'

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

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="activities">
          <Activities />
        </section>

        <a  href="https://icons8.com/icon/69120/search-bar">Search Bar</a> icon by <a href="https://icons8.com">Icons8</a>
      </body>
    </div>
  );
};

export default App
