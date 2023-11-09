import React from 'react';
import ReactDOM from 'react-dom';
import GymboxButton from './componenets/Personal Trainers/ptPage.jsx';
import GymboxHeader from './componenets/Personal Trainers/header.jsx';
import PersonalTrainerHeader from './componenets/Personal Trainers/body.jsx';
import './componenets/Personal Trainers/header.jsx';

ReactDOM.render(
  <React.StrictMode>
    <GymboxButton />
    <GymboxHeader />
    <PersonalTrainerHeader />
  </React.StrictMode>,
  document.getElementById('root')
);

