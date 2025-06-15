import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a2a3a] text-white border-t-4 border-[#fcd346] py-8 mt-16">
      <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-3">
        
        {/* Left Column */}
        <div>
          <h3 className="mb-2 text-xl font-bold text-[#fcd346]">Pan Mabur</h3>
          <p className="text-sm text-gray-300">
            Honoring our heritage through leadership, culture, and unity in Duk County, Jonglei State.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="mb-2 font-semibold text-lg text-[#fcd346]">Navigation</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="text-gray-300 hover:text-[#d63905]">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-[#d63905]">About</Link></li>
            <li><Link to="/blogs" className="text-gray-300 hover:text-[#d63905]">Blogs</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-[#d63905]">Contact</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-semibold mb-2 text-lg text-[#fcd346]">Contact Us</h4>
          <p className="text-gray-300">Duk County, Jonglei State<br />South Sudan</p>
          <p className="mt-1 text-gray-300">Email: <a href="mailto:info@panmabur.org" className="text-[#e0a800] hover:underline">info@panmabur.org</a></p>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-gray-400 bg-[#0d1e2d] py-4 ">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="bg-[#0d1e2d] py-4> text-sm text-gray-400 text-center">
        
        © {new Date().getFullYear()} Pan Mabur Community. All rights reserved.
      </div>
          </div>
           </div>
    </footer>
  );
}
