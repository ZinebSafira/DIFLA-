import React from 'react';
import './LevelScreen.css';
import background from '../assets/images/background.png';
import starfish from '../assets/images/starfish.png';
import profileAvatar from '../assets/images/profile-avatar.png';
import bubbleFish from '../assets/images/buble-fish.png';
import arrowBack from '../assets/images/Arrowback.png';



const LevelScreen = () => {
  return (
    <div className="level-screen">
      <img src={background} alt="Background" className="background" />
      <img src={arrowBack} alt="Back Arrow" className="back-arrow" />

      <div className="header">
        <span className="greeting">Hello, Ange</span>
        <img src={profileAvatar} alt="Profile" className="profile-avatar" />
      </div>

      <div className="content">
        <img src={bubbleFish} alt="Bubble Fish" className="bubble-fish" />
        <h2 className="level-text">Level 4</h2>
        <p className="description">
          Here, you are supposed to read the letters out loud to complete the word!
        </p>
        <button className="start-button">Start</button>
      </div>

      <div className="stars">
        <img src={starfish} alt="Star" className="star" style={{ left: '443px', top: '240px' }} />
        <img src={starfish} alt="Star" className="star" style={{ left: '534px', top: '180px' }} />
        <img src={starfish} alt="Star" className="star" style={{ left: '644px', top: '157px' }} />
        <img src={starfish} alt="Star" className="star" style={{ left: '753px', top: '175px' }} />
        <img src={starfish} alt="Star" className="star" style={{ left: '835px', top: '238px' }} />
      </div>
    </div>
  );
};

export default LevelScreen;
