import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './styles.css'
import cover from '../cover.jpg'
import Navigation from './components/Navigation'


function App() {

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

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
      }
    });
  };

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
        <section id="about">About</section>
        <section id="education">Education</section>
        <section id="experience">Experience</section>
        <section id="projects">Projects</section>
        <section id="activities">Activities</section>
      </body>
    </div>
  )
}

export default App
