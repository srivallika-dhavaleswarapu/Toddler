import React from 'react';

const EnglishMenu = ({ setScreen, setLetterType }) => (
  <div 
    className="flex flex-col items-center justify-center h-screen bg-blue-100 bg-opacity-50 bg-cover bg-center"
    style={{ backgroundImage: `url('/images/balloons.png')` }}
  >
    <h1 className="text-4xl font-bold text-purple-900 mb-8">English Letters</h1>
    <button
      className=" text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-red-600 mb-4"
      onClick={() => {
        setLetterType('capital');
        setScreen('letterDisplay');
      }}
    >
      Capital Letters
    </button>
    <button
      className="  text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-600 mb-4"
      onClick={() => {
        setLetterType('small');
        setScreen('letterDisplay');
      }}
    >
      Small Letters
    </button>
    <button
      className=" bg-purple-400 text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-700"
      onClick={() => setScreen('home')}
    >
      Back to Home 🏠
    </button>
  </div>
);

export default EnglishMenu;