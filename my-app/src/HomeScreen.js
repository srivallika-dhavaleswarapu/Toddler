
// import React from 'react';

// const HomeScreen = ({ setScreen }) => (
//   <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
//     <h1 className="text-4xl font-bold text-blue-600 mb-8">Learn Letters & Numbers</h1>
//     <button
//       className="bg-green-500 text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-green-600 mb-4"
//       onClick={() => setScreen('englishMenu')}
//     >
//       English Letters
//     </button>
   
//     <button
//       className="bg-red-500 text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-red-600"
//       onClick={() => setScreen('numbersDisplay')}
//     >
//       Numbers
//     </button>
//     <button className="bg-gray-500 text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-600 mt-4"
//       onClick={() => setScreen('letterguess')}
//     >
//       Letter Guess
//     </button>
//     <button className="bg-purple-500 text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-purple-600 mt-4"
//       onClick={() => setScreen('letterfill')}
//     >
//       Letter Fill
//     </button>
//   </div>
// );

// export default HomeScreen;

import React from 'react';
import { motion } from 'framer-motion';

const HomeScreen = ({ setScreen }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 p-6">
    <motion.h1
      className="text-5xl sm:text-6xl font-extrabold text-purple-600 drop-shadow-lg mb-12"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, scale: [1, 1.05, 1] }}
      transition={{ duration: 0.8, ease: 'easeOut', scale: { repeat: Infinity, duration: 2 } }}
    >
      Learn Letters & Numbers
    </motion.h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md sm:max-w-lg">
      <motion.button
        className="bg-green-500 text-white text-2xl sm:text-3xl font-bold py-6 px-10 rounded-3xl shadow-2xl hover:bg-green-600 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/balloon1.png')" }}
        onClick={() => setScreen('englishMenu')}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        English Letters
      </motion.button>
      <motion.button
        className="bg-red-500 text-white text-2xl sm:text-3xl font-bold py-6 px-10 rounded-3xl shadow-2xl hover:bg-red-600 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/balloon2.png')" }}
        onClick={() => setScreen('numbersDisplay')}
        whileHover={{ scale: 1.1, rotate: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Numbers
      </motion.button>
      <motion.button
        className="bg-blue-500 text-white text-2xl sm:text-3xl font-bold py-6 px-10 rounded-3xl shadow-2xl hover:bg-blue-600 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/balloon3.png')" }}
        onClick={() => setScreen('letterguess')}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Letter Guess
      </motion.button>
     
    </div>
  </div>
);

export default HomeScreen;