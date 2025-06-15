import React from 'react';

const Contact = () => (
  <div className="max-w-2xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Contact Us</h2>
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="border p-3 rounded-md"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border p-3 rounded-md"
      />
      <textarea
        rows="4"
        placeholder="Your Message"
        className="border p-3 rounded-md"
      ></textarea>
      <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;
