import React from 'react';
import '../styles/GymboxButton.css';

function HomePage() {
  return (
    <div className="gymbox-button-container">
      <button className="switch">
        GYM<sup className="small-tm">&#x2122;</sup> BOX
      </button>
      <logoButton />
    </div>
  );
}

export default HomePage;
