import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import EnglishMenu from './EnglishMenu';
import LetterDisplay from './LetterDisplay';
import NumbersDisplay from './NumbersDisplay';
import LetterGuess from './LetterGuess';
import LetterFill from './LetterFill';
const App = () => {
  const [screen, setScreen] = useState('home');
  const [letterType, setLetterType] = useState(null);

  return (
    <div>
      {screen === 'home' && <HomeScreen setScreen={setScreen} />}
      {screen === 'englishMenu' && (
        <EnglishMenu setScreen={setScreen} setLetterType={setLetterType} />
      )}
      {screen === 'letterDisplay' && (
        <LetterDisplay setScreen={setScreen} letterType={letterType} />
      )}
      {screen === 'numbersDisplay' && (
        <NumbersDisplay setScreen={setScreen} />
      )}
      {screen === 'letterguess' && (
        <LetterGuess setScreen={setScreen} letterType={letterType} />
      )}
      {screen === 'letterfill' && (
        <LetterFill setScreen={setScreen} letterType={letterType} />
      )}
    </div>
  );
};

export default App;