import React, { useState, useEffect } from 'react';

const NumbersDisplay = ({ setScreen }) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);

  const playSound = (number) => {
    const audio = new Audio(`/${number}.mp3`);
    audio.play().catch(err => console.log('Audio playback failed:', err));
  };

  useEffect(() => {
    playSound(numbers[currentNumberIndex]);
  }, [currentNumberIndex]);

  const handleNext = () => {
    setCurrentNumberIndex((prev) => (prev + 1) % numbers.length);
  };

  const handlePrevious = () => {
    setCurrentNumberIndex((prev) => (prev - 1 + numbers.length) % numbers.length);
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 bg-opacity-80 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-4"
    >
      <h1 
        className="text-9xl sm:text-[12rem] font-extrabold text-pink-500 mb-10 drop-shadow-lg animate-bounce"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        {numbers[currentNumberIndex]}
      </h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
        <button
          className="bg-blue-400 text-white text-3xl font-bold py-5 px-10 rounded-full shadow-xl hover:bg-blue-500 transform hover:scale-105 transition-transform duration-200"
          onClick={handlePrevious}
          style={{ fontFamily: "'Comic Neue', cursive" }}
        >
          ← Previous
        </button>
        <button
          className="bg-blue-400 text-white text-3xl font-bold py-5 px-10 rounded-full shadow-xl hover:bg-blue-500 transform hover:scale-105 transition-transform duration-200"
          onClick={handleNext}
          style={{ fontFamily: "'Comic Neue', cursive" }}
        >
          Next →
        </button>
      </div>
      <button
        className="bg-purple-400 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-xl hover:bg-purple-500 transform hover:scale-105 transition-transform duration-200"
        onClick={() => setScreen('home')}
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        Back to Home 🏠
      </button>
    </div>
  );
};

export default NumbersDisplay;