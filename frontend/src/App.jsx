import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import CRM from './pages/CRM';

// Import CSS
import './styles.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/crm" element={<CRM />} />
      </Routes>
      <Footer />
      <StickyContact />
    </Router>
  );
}

export default App;
