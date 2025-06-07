import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// Mapping letters to image names (e.g., A -> Apple)
const letterImages = {
  A: 'Apple', B: 'Ball', C: 'Cat', D: 'Dog', E: 'Elephant', F: 'Fish',
  G: 'Giraffe', H: 'Hat', I: 'Icecream', J: 'Juice', K: 'Kite', L: 'Lion',
  M: 'Monkey', N: 'Nest', O: 'Orange', P: 'Penguin', Q: 'Queen', R: 'Rabbit',
  S: 'Sun', T: 'Tiger', U: 'Umbrella', V: 'Violin', W: 'Whale', X: 'Xylophone',
  Y: 'Yak', Z: 'Zebra'
};

const LetterGuess = ({ setScreen, letterType }) => {
  const letters = letterType === 'capital'
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    : 'abcdefghijklmnopqrstuvwxyz'.split('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(Math.floor(Math.random() * letters.length));
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false); // New state for game over

  const playSound = (letter, isCorrect = false, isIncorrect = false) => {
    const audioFile = isCorrect ? 'correct' : isIncorrect ? 'incorrect' : letterType === 'capital' ? letter : letter.toUpperCase();
    const audio = new Audio(`/${audioFile}.mp3`);
    audio.play().catch(err => console.log('Audio playback failed:', err));
  };

  const generateOptions = (correctLetter) => {
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);
    const wrongOptions = shuffledLetters
      .filter(letter => letter !== correctLetter)
      .slice(0, 3);
    const allOptions = [correctLetter, ...wrongOptions].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
  };

  useEffect(() => {
    if (gameOver) return; // Skip if game is over
    const correctLetter = letters[currentLetterIndex];
    playSound(correctLetter);
    generateOptions(correctLetter);
    setFeedback(null);
    setImageError(false);
    setTimeLeft(15); // Reset timer to 15 seconds
  }, [currentLetterIndex, letterType]);

  useEffect(() => {
    if (gameOver) return; // Skip if game is over
    if (timeLeft <= 0) {
      // Time's up, end the game
      setGameOver(true);
      playSound(null, false, true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [timeLeft, gameOver]);

  const handleGuess = (selectedLetter) => {
    const correctLetter = letters[currentLetterIndex];
    if (selectedLetter === correctLetter) {
      setFeedback('correct');
      setScore(prev => prev + 10); // Add 10 points for correct answer
      playSound(null, true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00']
      });
      setTimeout(() => {
        setCurrentLetterIndex(Math.floor(Math.random() * letters.length));
      }, 1500);
    } else {
      setFeedback('incorrect');
      setScore(prev => Math.max(0, prev - 5)); // Deduct 5 points for incorrect answer, minimum 0
      playSound(null, false, true);
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    setCurrentLetterIndex(Math.floor(Math.random() * letters.length));
    setTimeLeft(15);
  };

  const currentLetter = letters[currentLetterIndex];
  const imageName = letterImages[currentLetter.toUpperCase()];
  const imageSrc = imageError ? '/images/fallback.png' : `/images/${currentLetter.toUpperCase()}.png`;

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-4">
        <motion.div
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-4 border-purple-400 mb-8 w-full max-w-xs sm:max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-600 text-center">
            Game Over!
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-bold text-blue-600 text-center">
            Your Final Score: {score}
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            className="bg-green-500 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-green-600 active:scale-95 bg-cover bg-center"
            // style={{ backgroundImage: "url('/images/balloon5.png')" }}
            onClick={restartGame}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1 } }}
          >
            Play Again
          </motion.button>
          <motion.button
            className="bg-orange-500 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-orange-600 active:scale-95 bg-cover bg-center"
            // style={{ backgroundImage: "url('/images/balloon5.png')" }}
            onClick={() => setScreen('englishMenu')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1 } }}
          >
            Back to Menu
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-4">
      <div className="flex justify-between w-full max-w-xs sm:max-w-md mb-4">
        <div className="text-xl sm:text-2xl font-bold text-blue-600">
          Score: {score}
        </div>
        <div className="text-xl sm:text-2xl font-bold text-red-600">
          Time: {timeLeft}s
        </div>
      </div>
      <motion.div
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-purple-400 mb-8 w-full max-w-xs sm:max-w-md"
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center">
          <motion.h1
            className="text-6xl sm:text-8xl font-extrabold text-purple-600 drop-shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            {currentLetter}
          </motion.h1>
          <img
            src={imageSrc}
            alt={imageName}
            className="mt-4 w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
            onError={() => setImageError(true)}
          />
          <p className="mt-2 text-xl sm:text-2xl font-bold text-blue-600">{imageName}</p>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md">
        {options.map((option, index) => (
          <motion.button
            key={index}
            className={`text-2xl sm:text-3xl font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-full shadow-2xl text-white bg-cover bg-center ${
              feedback === 'correct' && option === currentLetter
                ? 'bg-green-500'
                : feedback === 'incorrect' && option === currentLetter
                ? 'bg-red-500'
                : 'bg-blue-500'
            }`}
            style={{ backgroundImage: `url('/images/balloon${(index % 4) + 1}.png')` }}
            onClick={() => handleGuess(option)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={
              feedback === 'incorrect' && option === currentLetter
                ? { x: [-10, 10, -10, 10, 0], transition: { duration: 0.4 } }
                : { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1 } }
            }
            disabled={feedback !== null || timeLeft <= 0}
          >
            {option}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {feedback && (
          <motion.p
            className={`mt-4 text-xl sm:text-2xl font-bold ${
              feedback === 'correct' ? 'text-green-600' : 'text-red-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {feedback === 'correct' ? 'Yay, you got it!' : 'Oops, try again!'}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.button
        className="bg-orange-500 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-orange-600 active:scale-95 mt-6 sm:mt-8 bg-cover bg-center"
        onClick={() => setScreen('englishMenu')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1 } }}
      >
        Back to Menu
      </motion.button>
    </div>
  );
};

export default LetterGuess;