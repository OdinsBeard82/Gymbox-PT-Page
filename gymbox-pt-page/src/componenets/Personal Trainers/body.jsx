import React from 'react';
import '../styles/body.css';
import VPTimage from '../img/VPTimage.jpeg';
import VPTBoxer from '../img/VPT-Boxer.jpeg';

function PersonalTrainerHeader() {
  return (
    <div className="pt">
      <div className="imagesText">
        <img src={VPTimage} alt="VPTimage" className="trainer-image" />
        <div class='box1'></div>
        <div className="text-content1">
          <h3>Personal Training at Gymbox</h3>
          <p>Whether you need help giving gymtimidation the boot or expert programming to smash through those PBs, Gymbox PTs guarantee to give your workouts all the gear AND plenty of ideas. How? Well, cos we’ve trained them.</p>
        </div>
        </div>
        <img src={VPTBoxer} alt="VPTBoxer" className="boxer-image" />
        <div class='box2'></div>
        <div className="text-content2">
          <h3>Why work with a coach?</h3>
          <p>The Gymbox Academy works with some of the best coaches in London – each one bringing their unique personalities, specialist insight and expertise in club upon finishing training. Armed with the sharpest skills and latest techniques, choosing a Gymbox Personal Trainer means that whatever your goal, you’ll be in the safest (and strongest) hands around. Teaming up with your PT, you can expect tailored assessments and programmes to guide you. Access to more knowledge than Google and Stephen Fry combined. And plenty of professional expertise in weight management, strength training, rehabilitation, body composition, combat sports, movement health, and functional training.
          Whether you’re following their tailored or online training plan, your coach will make sure you’re performing all exercises correctly and keep pushing yourself. After all, if you want dem gains, you need to be held accountable – and that takes constant feedback, motivation, and support.
          If you’re interested in becoming one of our Personal Trainers, please <button className="clickHere">click here.</button>
          </p>
        </div>
      </div>

  );
}

export default PersonalTrainerHeader;
