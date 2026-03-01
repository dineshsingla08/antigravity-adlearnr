import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="#" className="logo footer-logo">
                        <div className="logo-icon" style={{ padding: '0', overflow: 'hidden', background: 'transparent', boxShadow: '0 0 15px var(--clr-primary-glow)' }}>
                            <img
                                src="https://yt3.googleusercontent.com/llQcRkUugQhVmK7EMIauJ19gvJhKdGuFfqy6luWZv01EhoANrOnWWkuXvzLc_7sjLZaV4fJJaIo=s900-c-k-c0x00ffffff-no-rj"
                                alt="Adlearnr Logo"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <span style={{ color: 'var(--clr-primary)' }}>Adlearnr</span>
                    </a>
                    <p>Elevating brands through data-driven digital marketing and expert consultation.</p>
                    <div className="social-links">
                        <a href="https://www.youtube.com/@Adlearnr" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/adlearnr/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/adlearnr/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#packages">Pricing</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="mailto:hello@adlearnr.com" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-solid fa-envelope"></i> hello@adlearnr.com</a></li>
                        <li><a href="https://wa.me/918958573159" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-brands fa-whatsapp"></i> +91 8958573159</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Adlearnr. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
