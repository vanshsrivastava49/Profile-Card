import React from 'react';
import './App.css'; // Optional, if you have a CSS file for styles
import vanshPhoto from './assets/vansh_photo.jpg';
import instaIcon from './assets/insta.png';
import linkedinIcon from './assets/linkedin.png';
import twitterIcon from './assets/twitter.png';
import githubIcon from './assets/github.webp';

const App = () => {
  return (
    <>
      <div className="profile-card">
      <img src={vanshPhoto} alt="Vansh Srivastava" />
        <h1>Vansh Srivastava</h1>
        <p>Full Stack Web Developer</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/vanshsrivastava49/" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/vansh-srivastava49/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://x.com/Vansh_49" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://github.com/vanshsrivastava49" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <div className="stats">
          <h3>2+</h3>
          <p>years of experience</p>
          <h3>100+</h3>
          <p>customers worldwide</p>
        </div>
        <div className="links">
          <a href="https://ghapla-in-mausam.vercel.app/" target="_blank" rel="noopener noreferrer">
            Weather App
          </a>
          <a href="https://campusbuzz.vercel.app/" target="_blank" rel="noopener noreferrer">
            CampusBuzz
          </a>
          <a href="https://github.com/vanshsrivastava49/Sahayak" target="_blank" rel="noopener noreferrer">
            Sahayak
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
