import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import FamilyAlbum from "./components/FamilyAlbum";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import BlogDetails from "./components/BlogDetails";



// FamilyTree main and branches
import RootTree from "./components/FamilyTree/RootTree";
import DengMaburTree from "./components/FamilyTree/DengMaburTree";
import BayakMaburTree from "./components/FamilyTree/BayakMaburTree";
import AkuolMaburTree from "./components/FamilyTree/AkuolMaburTree";
import AwanditMaburTree from "./components/FamilyTree/AwanditMaburTree";
import AwanMaburTree from "./components/FamilyTree/AwanMaburTree";
import AjuotMaburTree from "./components/FamilyTree/AjuotMaburTree";
import BolMaburTree from "./components/FamilyTree/BolMaburTree";
import MonykuerMaburTree from "./components/FamilyTree/MonykuerMaburTree";
import NgorMaburTree from "./components/FamilyTree/NgorMaburTree";
import RueiMaburTree from "./components/FamilyTree/RueiMaburTree";
import NyaweiMaburTree from "./components/FamilyTree/NyaweiMaburTree";

// Malual Mabur tree and his sons and daughters
import MalualMaburMain from "./components/FamilyTree/Malual";
import MaburMalual from "./components/FamilyTree/Malual/MaburMalual";
import MathiangMalual from "./components/FamilyTree/Malual/MathiangMalual";
import MawutMalual from "./components/FamilyTree/Malual/MawutMalual";
import AwanMalual from "./components/FamilyTree/Malual/AwanMalual";
import CholMalual from "./components/FamilyTree/Malual/CholMalual";
import MadukMalual from "./components/FamilyTree/Malual/MadukMalual";
import MagotMalual from "./components/FamilyTree/Malual/MagotMalual";
import AdauMalual from "./components/FamilyTree/Malual/AdauMalual";
//import AkuolMalual from "./components/FamilyTree/Malual/AkuolMalual"; //
import NyakoangMalual from "./components/FamilyTree/Malual/NyakoangMalual"; //
import NyandhierMalual from "./components/FamilyTree/Malual/NyandhierMalual"; //
import DengMalual from "./components/FamilyTree/Malual/DengMalual";
import AkoiMalual from "./components/FamilyTree/Malual/AkoiMalual";

// Mathiang Mabur tree and his sons and daughters
import MathiangMaburMain from "./components/FamilyTree/Mathiang";
import DengMathiang from "./components/FamilyTree/Mathiang/DengMathiang";
import YarMathiang from "./components/FamilyTree/Mathiang/YarMathiang";
import AkolMathiang from "./components/FamilyTree/Mathiang/AkolMathiang";
import DauMathiang from "./components/FamilyTree/Mathiang/DauMathiang";
import TongMathiang from "./components/FamilyTree/Mathiang/TongMathiang";

import "./index.css";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-[#f9f4ef]">
      <Navbar />

      {location.pathname === "/" && <Hero />}

      <main className="container flex-grow px-4 py-8 mx-auto">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/family-album" element={<FamilyAlbum />} />

          {/* FamilyTree Root */}
          <Route path="/familytree" element={<RootTree />} />

          {/* Main family branches under Mabur Ajuot */}

          <Route path="/familytree/bayak-mabur" element={<BayakMaburTree />} />
          <Route path="/familytree/deng-mabur" element={<DengMaburTree />} />
          <Route path="/familytree/ajuot-mabur" element={<AjuotMaburTree />} />
          <Route path="/familytree/bol-mabur" element={<BolMaburTree />} />
          <Route path="/familytree/akuol-mabur" element={<AkuolMaburTree />} />
          <Route
            path="/familytree/awandit-mabur"
            element={<AwanditMaburTree />}
          />
          <Route path="/familytree/awan-mabur" element={<AwanMaburTree />} />
          <Route
            path="/familytree/monykuer-mabur"
            element={<MonykuerMaburTree />}
          />
          <Route path="/familytree/ngor-mabur" element={<NgorMaburTree />} />
          <Route path="/familytree/ruei-mabur" element={<RueiMaburTree />} />
          <Route
            path="/familytree/nyawei-mabur"
            element={<NyaweiMaburTree />}
          />

          {/* Malual Mabur and his descendants */}
          <Route
            path="/familytree/malual-mabur"
            element={<MalualMaburMain />}
          />
          <Route
            path="/familytree/malual-mabur/mabur-malual"
            element={<MaburMalual />}
          />
          <Route
            path="/familytree/malual-mabur/mathiang-malual"
            element={<MathiangMalual />}
          />
          <Route
            path="/familytree/malual-mabur/mawut-malual"
            element={<MawutMalual />}
          />
          <Route
            path="/familytree/malual-mabur/awan-malual"
            element={<AwanMalual />}
          />
          <Route
            path="/familytree/malual-mabur/chol-malual"
            element={<CholMalual />}
          />
          <Route
            path="/familytree/malual-mabur/maduk-malual"
            element={<MadukMalual />}
          />
          <Route
            path="/familytree/malual-mabur/adau-malual"
            element={<AdauMalual />}
          />
          <Route
            path="/familytree/malual-mabur/magot-malual"
            element={<MagotMalual />}
          />
          <Route
            path="/familytree/malual-mabur/deng-malual"
            element={<DengMalual />}
          />
          <Route
            path="/familytree/malual-mabur/akoi-malual"
            element={<AkoiMalual />}
          />
          <Route
            path="/familytree/malual-mabur/nyakoang-malual"
            element={<NyakoangMalual />}
          />
          <Route
            path="/familytree/malual-mabur/nyandhier-malual"
            element={<NyandhierMalual />}
          />

          {/* Mathiang Mabur and his descendants */}

          <Route
            path="/familytree/mathiang-mabur"
            element={<MathiangMaburMain />}
          />

          <Route
            path="/familytree/mathiang-mabur/deng-mathiang"
            element={<DengMathiang />}
          />
          <Route
            path="/familytree/mathiang-mabur/yar-mathiang"
            element={<YarMathiang />}
          />
          <Route
            path="/familytree/mathiang-mabur/akol-mathiang"
            element={<AkolMathiang />}
          />
          <Route
            path="/familytree/mathiang-mabur/dau-mathiang"
            element={<DauMathiang />}
          />
          <Route
            path="/familytree/mathiang-mabur/tong-mathiang"
            element={<TongMathiang />}
          />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
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
