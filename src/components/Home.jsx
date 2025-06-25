import React from 'react';
import { motion } from 'framer-motion';
import HomePreviews from './HomePreviews';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f0e7] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="p-8 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold text-[#3d2e1f]"
        >
          Pan Mabur: A Legacy of Kinship
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-[#5e5043]"
        >
          Preserving the stories, traditions, and leadership of a people
        </motion.p>
      </motion.div>


      <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 px-6 py-3 bg-[#6b4e2f] text-white rounded-full shadow-lg"
>
  Explore Our History
</motion.button>


      <section className="max-w-5xl px-4 py-12 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Pan Mabur Ajuot
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          Rooted in the heart of <strong>Duk, Jonglei State</strong>, <strong>Pan Mabur</strong> is a proud Dinka (Hol) lineage known for its enduring leadership,
          vibrant cultural identity, and deep community bonds. From the rhythm of traditional Dinka dance to the strength of ancestral
          leadership, our heritage reflects unity, pride, and progress.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          With leadership spanning generations from <strong>Monykuer Mabur Ajuot</strong> to today’s paramount chief <strong>Deng Mabur Malual</strong>, Pan Mabur has guided both village life and local governance. Our story is one of resilience and dignity, passed down through the
          values of cattle keeping, education, respect, and community spirit.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          We celebrate who we are through the beats of the drum, the symbolism of cattle, and the rich ties built with neighboring communities.
          This is more than a heritage—it’s a legacy in motion. <strong>Welcome home to Pan Mabur.</strong>
        </p>

        <HomePreviews />
      </section>
    </div>
  );
}
