import React, { useState, useEffect } from 'react';
import { getRandomNumber, getContrastYIQ } from './utils/Helper';
import './App.css';

function App() {
  const [category, setCategory] = useState('Press the spacebar');
  const [show, setShow] = useState(true);
  const [colour, setColour] = useState();
  const [contrast, setContrast] = useState();

  const cards = {
    categories: ['Random', 'Hopes & Dreams','Self-Expression', 'Reflection', 'Likes & Dislikes', 'Emotional Intelligence'],
    colours: ['#E0E0E0', '#F5F500', '#FF1F1F', '#009DFF', '#21A300', '#6F5F81']
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    document.addEventListener('touchstart', handleTocuhStart);
    return () => {
      document.removeEventListener('touchstart', handleTocuhStart);
    };
  });

  function handleKeyDown(event) {
    switch(event.code) {
      case 'Space':
        // pick a random card
        pickCard(getRandomNumber());
        break;
      case 'KeyR': case 'Digit0':
        // Random  
        pickCard(0);
        break;
      case 'KeyH': case 'Digit1':
        // Hopes & Dreams  
        pickCard(1);
        break;
      case 'KeyS': case 'Digit2':
        // Self-Expression  
        pickCard(2);
        break;
      case 'KeyX': case 'Digit3':
        // Reflection  
        pickCard(3);
        break;
      case 'KeyL': case 'Digit4':
        // Likes & Dislikes
        pickCard(4);
        break;
      case 'KeyE': case 'Digit5':  
        // Emotional Intelligence
        pickCard(5);
        break;
      default:
        // do nothing
    }
  }

  function handleTocuhStart(event) {
    pickCard(getRandomNumber()); 
  }

  // pick a card 
  const pickCard = (x) => {
    setShow(false);
    setCategory(cards.categories[x]);
    setColour(cards.colours[x]);
    //contrast text colour against card color background
    setContrast(getContrastYIQ(cards.colours[x]));
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: `${colour}`, color: `${contrast}` }}>
        <p>{category}</p>
        <p className="App-cards">{show && cards.categories.join(' | ')}</p>
      </header>
    </div>
  );
}

export default App;