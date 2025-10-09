import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import panmaburLogo from '../assets/panmabur.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#e3caa5] shadow-md border-b-2 border-[#b8a28a] px-4 py-3">
      <div className="container flex items-center justify-between mx-auto">
        {/* Brand */}
        <Link to="/" className="flex items-center py-2 space-x-2 text-2xl font-bold text-blue-900 font-poppins">
          <img src={panmaburLogo} alt="Pan Mabur logo" className="w-8 h-8" />
          <span>Pan Mabur</span>
        </Link>
        {/* Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 text-base font-inter text-gray-800 ${isOpen ? 'block mt-4' : 'hidden'} md:block`}>
          <Link to="/" className="block hover:text-[#c45a2a]">Home</Link>
          <Link to="/about" className="block hover:text-[#c45a2a]">About</Link>
          <Link to="/blogs" className="block hover:text-[#c45a2a]">Blogs</Link>
          <Link to="/contact" className="block hover:text-[#c45a2a]">Contact</Link>
        </div>
      </div>
    </nav>
  );
}