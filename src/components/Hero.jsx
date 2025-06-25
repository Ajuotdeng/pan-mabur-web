import React from 'react';
import dukImage from '../assets/Duk.jpg';

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${dukImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl font-bold text-white md:text-5xl drop-shadow-lg">
          Welcome to Pan Mabur
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-200 md:text-xl">
          Rooted in the heart of <strong>Duk, Jonglei State</strong>, Pan Mabur is a proud Dinka (Hol) community preserving
          generations of leadership, cultural pride, and unity. This is more than a heritage—it’s a living legacy.
        </p>
      </div>
    </section>
  );
}
