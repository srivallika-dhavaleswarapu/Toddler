
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// // Mapping letters to image names (e.g., A -> Apple)
// const letterImages = {
//   A: 'Apple', B: 'Ball', C: 'Cat', D: 'Dog', E: 'Elephant', F: 'Fish',
//   G: 'Giraffe', H: 'Hat', I: 'Icecream', J: 'Juice', K: 'Kite', L: 'Lion',
//   M: 'Monkey', N: 'Nest', O: 'Orange', P: 'Penguin', Q: 'Queen', R: 'Rabbit',
//   S: 'Sun', T: 'Tiger', U: 'Umbrella', V: 'Violin', W: 'Whale', X: 'Xylophone',
//   Y: 'Yak', Z: 'Zebra'
// };

// const LetterDisplay = ({ setScreen, letterType }) => {
//   const letters = letterType === 'capital'
//     ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//     : 'abcdefghijklmnopqrstuvwxyz'.split('');
//   const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
//   const [imageError, setImageError] = useState(false);

//   const playSound = (letter) => {
//     const audioFile = letterType === 'capital' ? letter : letter.toUpperCase();
//     const audio = new Audio(`/${audioFile}.mp3`);
//     audio.play().catch(err => console.log('Audio playback failed:', err));
//   };

//   useEffect(() => {
//     playSound(letters[currentLetterIndex]);
//     setImageError(false); // Reset image error on letter change
//   }, [currentLetterIndex, letterType]);

//   const handleNext = () => {
//     setCurrentLetterIndex((prev) => (prev + 1) % letters.length);
//   };

//   const handlePrevious = () => {
//     setCurrentLetterIndex((prev) => (prev - 1 + letters.length) % letters.length);
//   };

//   const currentLetter = letters[currentLetterIndex];
//   const imageName = letterImages[currentLetter.toUpperCase()];
//   const imageSrc = imageError ? '/images/fallback.png' : `/images/${currentLetter.toUpperCase()}.png`;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-4">
//       <motion.div
//         className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-blue-400 mb-8 w-full max-w-xs sm:max-w-md"
//         initial={{ scale: 0.8, rotate: -10 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//       >
//         <div className="flex flex-col items-center">
//           <h1 className="text-7xl sm:text-9xl font-extrabold text-purple-600 drop-shadow-lg">
//             {currentLetter}
//           </h1>
//           <img
//             src={imageSrc}
//             alt={imageName}
//             className="mt-4 w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
//             onError={() => setImageError(true)}
//           />
//           <p className="mt-2 text-xl sm:text-2xl font-bold text-blue-600">{imageName}</p>
//         </div>
//       </motion.div>
//       <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-xs sm:max-w-md">
//         <motion.button
//           className="bg-green-500 text-white text-xl sm:text-2xl font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-green-600 active:scale-95"
//           onClick={handlePrevious}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           ← Previous
//         </motion.button>
//         <motion.button
//           className="bg-red-500 text-white text-xl sm:text-2xl font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-red-600 active:scale-95"
//           onClick={handleNext}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Next →
//         </motion.button>
//       </div>
//       <motion.button
//         className="bg-orange-500 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-orange-600 active:scale-95 mt-6 sm:mt-8"
//         onClick={() => setScreen('englishMenu')}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         Back to Menu 
//       </motion.button>
//     </div>
//   );
// };

// export default LetterDisplay;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mapping letters to image names (e.g., A -> Apple)
const letterImages = {
  A: 'Apple', B: 'Ball', C: 'Cat', D: 'Dog', E: 'Elephant', F: 'Fish',
  G: 'Giraffe', H: 'Hat', I: 'Icecream', J: 'Juice', K: 'Kite', L: 'Lion',
  M: 'Monkey', N: 'Nest', O: 'Orange', P: 'Penguin', Q: 'Queen', R: 'Rabbit',
  S: 'Sun', T: 'Tiger', U: 'Umbrella', V: 'Violin', W: 'Whale', X: 'Xylophone',
  Y: 'Yak', Z: 'Zebra'
};

const LetterDisplay = ({ setScreen, letterType }) => {
  const letters = letterType === 'capital'
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    : 'abcdefghijklmnopqrstuvwxyz'.split('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const playSound = (letter) => {
    const audioFile = letterType === 'capital' ? letter : letter.toUpperCase();
    const audio = new Audio(`/${audioFile}.mp3`);
    audio.play().catch(err => console.log('Audio playback failed:', err));
  };

  useEffect(() => {
    playSound(letters[currentLetterIndex]);
    setImageError(false); // Reset image error on letter change
  }, [currentLetterIndex, letterType]);

  const handleNext = () => {
    setCurrentLetterIndex((prev) => (prev + 1) % letters.length);
  };

  const handlePrevious = () => {
    setCurrentLetterIndex((prev) => (prev - 1 + letters.length) % letters.length);
  };

  const currentLetter = letters[currentLetterIndex];
  const imageNameRaw = letterImages[currentLetter.toUpperCase()];
  const imageName = letterType === 'small' ? imageNameRaw.toLowerCase() : imageNameRaw;
  const imageSrc = imageError ? '/images/fallback.png' : `/images/${currentLetter.toUpperCase()}.png`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-4">
      <motion.div
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-blue-400 mb-8 w-full max-w-xs sm:max-w-md"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-7xl sm:text-9xl font-extrabold text-purple-600 drop-shadow-lg">
            {currentLetter}
          </h1>
          <img
            src={imageSrc}
            alt={imageName}
            className="mt-4 w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
            onError={() => setImageError(true)}
          />
          <p className="mt-2 text-xl sm:text-2xl font-bold text-blue-600">{imageName}</p>
        </div>
      </motion.div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-xs sm:max-w-md">
        <motion.button
          className="bg-green-500 text-white text-xl sm:text-2xl font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-green-600 active:scale-95"
          onClick={handlePrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← Previous
        </motion.button>
        <motion.button
          className="bg-red-500 text-white text-xl sm:text-2xl font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-red-600 active:scale-95"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Next →
        </motion.button>
      </div>
      <motion.button
        className="bg-orange-500 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-orange-600 active:scale-95 mt-6 sm:mt-8"
        onClick={() => setScreen('englishMenu')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Back to Menu 
      </motion.button>
    </div>
  );
};

export default LetterDisplay;