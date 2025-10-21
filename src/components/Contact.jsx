import React from 'react';

const Contact = () => (
  <div className="max-w-2xl px-4 py-8 mx-auto">
    <h2 className="flex items-center justify-center mb-4 text-3xl font-semibold text-indigo-700">Contact Us</h2>
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 border rounded-md"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-3 border rounded-md"
      />
      <textarea
        rows="4"
        placeholder="Your Message"
        className="p-3 border rounded-md"
      ></textarea>
      <button className="px-4 py-2 text-white transition bg-indigo-600 rounded hover:bg-indigo-700">
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;
