import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <div className="logo-icon" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: '0 0 15px var(--clr-primary-glow)' }}>
                        <img
                            src="https://yt3.googleusercontent.com/llQcRkUugQhVmK7EMIauJ19gvJhKdGuFfqy6luWZv01EhoANrOnWWkuXvzLc_7sjLZaV4fJJaIo=s900-c-k-c0x00ffffff-no-rj"
                            alt="Adlearnr Logo"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <span style={{ color: 'var(--clr-primary)' }}>Adlearnr</span>
                </Link>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/#home" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                    <li className="nav-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                        <div
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Solutions/Services <i className={`fa-solid fa-chevron-down ${dropdownOpen ? 'open' : ''}`} style={{ fontSize: '0.8rem', transition: 'transform 0.3s' }}></i>
                        </div>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="/#contact" onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}>Performance Marketing</a></li>
                                <li><a href="/#contact" onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}>Lead Gen & eCommerce</a></li>
                                <li><a href="/#contact" onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}>SEO</a></li>
                                <li><a href="/#contact" onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}>Strategy & Consultation</a></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/#packages" onClick={() => setMobileMenuOpen(false)}>Clients & Results</Link></li>
                    <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
                </ul>

                <a href="/#contact" className="btn btn-primary nav-cta">Enquire Now</a>

                <div
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
