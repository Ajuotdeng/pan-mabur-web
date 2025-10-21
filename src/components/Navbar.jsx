import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import panmaburLogo from '../assets/panmabur.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#e3caa5] border-b-2 border-[#b8a28a] shadow-md">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-900 font-poppins">
          <img src={panmaburLogo} alt="Pan Mabur logo" className="w-9 h-9" />
          <span>Pan Mabur</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex md:space-x-8 text-base font-inter text-gray-800 ${isOpen ? 'block mt-4' : 'hidden'} md:block`}>
          <Link to="/" className="block hover:text-[#c45a2a]">Home</Link>
          <Link to="/leadership" className="block hover:text-[#c45a2a]">Leadership</Link>
          <Link to="/blogs" className="block hover:text-[#c45a2a]">Blogs</Link>
          <Link to="/contact" className="block hover:text-[#c45a2a]">Contact</Link>
          
        </nav>
      </div>
    </header>
  );
}
