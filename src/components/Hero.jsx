import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import padiet from "../assets/Padiet.jpg";
import duk from "../assets/Duk.jpg";

const images = [padiet, duk];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={current}
            src={images[current]}
            alt="Pan Mabur"
            className="absolute inset-0 object-cover w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-10 bg-black bg-opacity-60" />

      <div className="relative z-20 max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl font-bold text-white md:text-6xl drop-shadow-lg"
        >
          Pan Mabur: A Legacy of Kinship
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg text-gray-200 md:text-xl"
        >
          Preserving the stories, traditions, and leadership of a people
        </motion.p>

        <Link to="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-[#6b4e2f] text-white rounded-full shadow-lg"
          >
            Explore Our History
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
