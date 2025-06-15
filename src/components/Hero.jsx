import React from 'react';
import dukImage from '../assets/Duk.jpg'; 

export default function Hero() {
  return (
    <section className="pt-24 pb-16 text-center bg-white sm:pt-32 sm:pb-20">
      <div className="container mx-auto">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Pan Mabur Community</h1>
        <p className="mb-6 text-lg text-gray-700">
          Celebrating heritage, leadership, and unity in Duk, Jonglei State, South Sudan.
        </p>
        <img
          src={dukImage}
          alt="Duk County"
          className="w-full max-w-4xl mx-auto shadow-lg rounded-xl"
        />
      </div>
    </section>
  );
}
