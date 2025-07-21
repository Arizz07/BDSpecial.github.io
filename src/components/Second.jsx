import React from 'react'
import Confetti from 'react-confetti';

function Second() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 text-center relative overflow-hidden">
      {/* 🎊 Confetti */}
      <Confetti />

      {/* 🎂 Celebration Box */}
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full z-10">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4 dance-text">🎉  Happy Birthday  🎉 </h1>
        <h1 className="text-3xl font-bold text-pink-600 mb-4 signika-text"> 🎈✨ Nousha ✨ 🎈 </h1>
        <p className="text-gray-700 text-lg winky-text">
          Wishing you a day filled with love, joy, and happiness!. May Allah fullfilss your Dream Insha Allah  🍰
        </p>
        <p className="text-gray-700 text-lg winky-text mb-2">
            Have a Great Day Bro..!!!
        </p>
        <hr />
        <div className="flex flex-col justify-end items-end mt-4">
            <p className='mr-8'>With Love..💖</p>
            <p className='winky-text text-amber-600 font-semibold'>Avthmmande Pullozzz</p>
        </div>
      </div>

      {/* ✨ Floating Emoji or Sparkles */}
      <div className="absolute text-4xl animate-pulse top-10 left-10">🎈</div>
      <div className="absolute text-4xl animate-bounce top-20 right-12">🎁</div>
      <div className="absolute text-4xl animate-ping bottom-10 left-20">💖</div>
    </div>
  )
}

export default Second