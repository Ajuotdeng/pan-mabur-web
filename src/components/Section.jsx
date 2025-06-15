import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-4 border-b pb-2">{title}</h2>
    <p className="text-gray-700 text-lg leading-relaxed">{children}</p>
  </section>
);

export default Section;
