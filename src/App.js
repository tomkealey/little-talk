import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [category, setCategory] = useState('Press the spacebar');
  const [colour, setColour] = useState();

  const cards = {
    categories: ['Life', 'Random','Deep', 'Experiences', 'If you could...', 'Would you rather...'],
    colours: ['#E0E0E0', '#F5F500', '#FF1F1F', '#009DFF', '#21A300', '#6F5F81']
  }

  function handleKeyDown(event) {
    switch(event.code) {
      case 'Space':
        // pick a random card
        pickCard(Math.floor(Math.random()*6));
        break;
      case 'KeyL': case 'Digit0':  
        pickCard(0);
        break;
      case 'KeyR': case 'Digit1':  
        pickCard(1);
        break;
      case 'KeyD': case 'Digit2':  
        pickCard(2);
        break;
      case 'KeyE': case 'Digit3':  
        pickCard(3);
        break;
      case 'KeyI': case 'Digit4':  
        pickCard(4);
        break;
      case 'KeyW': case 'Digit5':  
        pickCard(5);
        break;
      default:
        // do nothing
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  // pick a card 
  const pickCard = (x) => {
    setCategory(cards.categories[x]);
    setColour(cards.colours[x]);
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: `${colour}` }}>
        <p>{category}</p>
      </header>
    </div>
  );
}

export default App;