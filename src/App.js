import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import BlogDetails from './components/BlogDetails';





import './index.css';

function Layout() {
  const location = useLocation();

  return (
      <div className="font-sans"> 
      <Navbar />
      <ScrollToTop />

      
      {location.pathname === '/' && <Hero />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
