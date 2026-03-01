import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import CRM from './pages/CRM';

// Import CSS
import './styles.css';

function App() {
  return (
    <Router>
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
