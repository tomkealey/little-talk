import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [category, setCategory] = useState('Press the spacebar');
  const [colour, setColour] = useState();

  function handleKeyDown(event) {
    if(event.code === 'Space') {
      pickCard();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    document.addEventListener('touchstart', handleKeyDown);
    return () => {
      document.removeEventListener('touchstart', handleKeyDown);
    };
  });

  const cards = {
    categories: ['Life', 'Random','Deep', 'Experiences', 'If you could...', 'Would you rather...'],
    colours: ['#E0E0E0', '#F5F500', '#FF1F1F', '#009DFF', '#21A300', '#6F5F81']
  }

  // pick a random card 
  const pickCard = () => {
    const id = Math.floor(Math.random()*6); 

    setCategory(cards.categories[id]);
    setColour(cards.colours[id]);
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