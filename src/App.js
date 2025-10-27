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
import RootTree from "./components/FamilyTree/RootTree";
import MalualMaburTree from "./components/FamilyTree/MalualMaburTree";
import DengMaburTree from "./components/FamilyTree/DengMaburTree";
import MathiangMaburTree from "./components/FamilyTree/MathiangMaburTree";
import BayakMaburTree from "./components/FamilyTree/BayakMaburTree";
import AkuolMaburTree from "./components/FamilyTree/AkuolMaburTree";
import AwanditMaburTree from "./components/FamilyTree/AwanditMaburTree";
import AwanMaburTree from "./components/FamilyTree/AwanMaburTree";
import BolMaburTree from "./components/FamilyTree/BolMaburTree";
import MonykuerMaburTree from "./components/FamilyTree/MonykuerMaburTree";
import NgorMaburTree from "./components/FamilyTree/NgorMaburTree";
import RueiMaburTree from "./components/FamilyTree/RueiMaburTree";
import NyaweiMaburTree from "./components/FamilyTree/NyaweiMaburTree";

import './index.css';

function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#f9f4ef]">
      <Navbar />

      {/* Hero only on the homepage */}
      {location.pathname === '/' && <Hero />}

      <main className="container flex-grow px-4 py-8 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />

          {/* Family Tree routes */}
          <Route path="/familytree" element={<RootTree />} />
          <Route path="/familytree/malual-mabur" element={<MalualMaburTree />} />
          <Route path="/familytree/mathiang-mabur" element={<MathiangMaburTree />} />
          <Route path="/familytree/bayak-mabur" element={<BayakMaburTree />} />
          <Route path="/familytree/deng-mabur" element={<DengMaburTree />} />
          <Route path="/familytree/bol-mabur" element={<BolMaburTree />} />
          <Route path="/familytree/akuol-mabur" element={<AkuolMaburTree />} />
          <Route path="/familytree/awandit-mabur" element={<AwanditMaburTree />} />
          <Route path="/familytree/awan-mabur" element={<AwanMaburTree />} />
          <Route path="/familytree/monykuer-mabur" element={<MonykuerMaburTree />} />
          <Route path="/familytree/ngor-mabur" element={<NgorMaburTree />} />
          <Route path="/familytree/ruei-mabur" element={<RueiMaburTree />} />
          <Route path="/familytree/nyawei-mabur" element={<NyaweiMaburTree />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}
