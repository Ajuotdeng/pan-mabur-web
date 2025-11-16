import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="pb-2 mb-4 text-2xl font-semibold text-indigo-700 border-b md:text-3xl">
      {title}
    </h2>
    <p className="text-lg leading-relaxed text-gray-700">{children}</p>
  </section>
);

export default Section;
