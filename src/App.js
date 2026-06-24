import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Home from "./components/Home";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import Admissions from "./components/Admissions";

function App() {
  return (
    <BrowserRouter>
      <style>{`
        .sticky-social{
          position:fixed;
          left:0;
          top:50%;
          transform:translateY(-50%);
          z-index:9999;
        }

        .sticky-social a{
          width:60px;
          height:62px;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          text-decoration:none;
          transition:.3s;
        }

        .sticky-social a:hover{
          width:75px;
        }

        .facebook{background:#2d73b9;}
        .twitter{background:#1dc8e9;}
        .instagram{background:#d96ce6;}
        .youtube{background:#f01414;}

        .enquire-now{
          position:fixed;
          right:0;
          top:35%;
          z-index:9999;
        }

        .enquire-now a{
          writing-mode:vertical-rl;
          transform:rotate(180deg);
          background:#ff4d8d;
          color:#fff;
          text-decoration:none;
          padding:18px 10px;
          font-weight:700;
        }
      `}</style>

      <div className="sticky-social">
        <a href="https://facebook.com" className="facebook">
          <FaFacebook />
        </a>

        <a href="https://twitter.com" className="twitter">
          <FaTwitter />
        </a>

        <a href="https://instagram.com" className="instagram">
          <FaInstagram />
        </a>

        <a href="https://youtube.com" className="youtube">
          <FaYoutube />
        </a>
      </div>

      <div className="enquire-now">
        <a href="#contact">Enquire Now</a>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admissions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;