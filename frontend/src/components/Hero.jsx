import React from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Hero = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    return (
        <section className="hero" id="home">
            <div className="container hero-container" ref={containerRef}>

                <div className="hero-content">

                    <h1 className="hero-title animate-fade-in-up delay-100">
                        Your Growth <span className="text-gradient">Matters!</span>
                    </h1>
                    <p className="hero-desc animate-fade-in-up delay-200">
                        We offer an A to Z Digital Marketing Solution devised to boost your Brand, impact the right audience and widen your brand's reach.
                    </p>
                    <div className="hero-btns animate-fade-in-up delay-300">
                        <a href="#contact" className="btn btn-primary">
                            Enquire Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#services" className="btn btn-outline">
                            Explore Services
                        </a>
                    </div>

                    <div className="hero-stats animate-fade-in-up delay-400">
                        <div className="stat-item">
                            <h4>80+</h4>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-item">
                            <h4>200+</h4>
                            <p>Brands Consulted</p>
                        </div>
                        <div className="stat-item">
                            <h4>5+</h4>
                            <p>Continents Served</p>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in-up delay-300">
                    <div className="floating-badge badge-1 glass-effect">
                        <div className="badge-icon"><i className="fa-solid fa-arrow-trend-up"></i></div>
                        <div className="badge-text">
                            <h5>Conversion Rate</h5>
                            <p>+150% This Month</p>
                        </div>
                    </div>

                    <div className="visual-card">
                        <h3>Performance Matrix</h3>
                        <p style={{ color: "var(--clr-text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                            Live Campaign Data
                        </p>
                        <div className="chart-mockup">
                            <div className="chart-bar"></div>
                            <div className="chart-bar"></div>
                            <div className="chart-bar"></div>
                            <div className="chart-bar"></div>
                            <div className="chart-bar"></div>
                        </div>
                    </div>

                    <div className="floating-badge badge-2 glass-effect">
                        <div className="badge-icon"><i className="fa-brands fa-meta"></i></div>
                        <div className="badge-text">
                            <h5>Meta Ads</h5>
                            <p>Optimized Campaigns</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
