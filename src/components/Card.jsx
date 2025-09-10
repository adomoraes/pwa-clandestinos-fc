import React from 'react';

function Card({ personality }) {
  return (
    <div className="transform cursor-pointer rounded-lg border-2 border-transparent bg-gray-900 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-clandestinos-yellow">
      <img
        src={personality.image.url}
        alt={personality.name}
        className="mx-auto h-48 w-48 rounded-full object-cover"
      />
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-white">{personality.name}</h3>
      </div>
    </div>
  );
}

export default Card;
