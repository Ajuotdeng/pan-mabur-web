import React from 'react';

import HomePreviews from './HomePreviews';



export default function Home() {
  return (
  

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
        <div>
      <h1 className="mb-4 font-serif text-3xl text-panEarth">Pan Mabur Digital Archive</h1>
      <p className="mb-4">A living record of the people, leaders, and culture. This starter site is intentionally simple. Add content through the admin dashboard.</p>
    </div>

        <HomePreviews />
      </section>
    
  );
}
