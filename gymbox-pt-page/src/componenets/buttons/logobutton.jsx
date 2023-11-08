import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

function LogoButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push('../HomePage/homePage.jsx'); // Navigate to the '/home' route
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
}

export default LogoButton;
