import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";  // Removed BrowserRouter import
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

import NavigationBar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// ✅ Import scroll-reveal hook
import useScrollReveal from "./utils/useScrollReveal";

// Lazy-loaded route components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const MapView = lazy(() => import("./components/MapView"));

const App = () => {
  const [footerFixed, setFooterFixed] = useState(false);
  const [isShortPage, setIsShortPage] = useState(false);
  const scrollTimeout = useRef(null);

  useScrollReveal();

  const checkPageHeight = () => {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    setIsShortPage(docHeight <= windowHeight);
  };

  const handleScroll = () => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      if (isShortPage) {
        setFooterFixed(true);
        return;
      }

      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      setFooterFixed(scrollTop + windowHeight >= docHeight - 10);
    }, 100);
  };

  useEffect(() => {
    checkPageHeight();
    window.addEventListener("resize", checkPageHeight);
    window.addEventListener("load", checkPageHeight);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isShortPage]);

  return (
    <div className="app-wrapper">
      <NavigationBar />
      <ScrollToTop />
      <div className="container content-wrapper">
        <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<div className="page"><Home /></div>} />
            <Route path="/about" element={<div className="page"><About /></div>} />
            <Route path="/contact" element={<div className="page"><Contact /></div>} />
            <Route path="/Mapview" element={<div className="page"><MapView /></div>} />
          </Routes>
        </Suspense>
      </div>
      <Footer fixed={footerFixed} />
    </div>
  );
};

export default App;
