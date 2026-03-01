import React, { useEffect } from 'react';

const About = () => {
    // Scroll to top when loading the about page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="about-page">
            <section className="hero" style={{ paddingBottom: '3rem', minHeight: '50vh', alignContent: 'center' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <div className="hero-badge animate-fade-in-up" style={{ margin: '0 auto 1.5rem' }}>About Us</div>
                        <h1 className="hero-title animate-fade-in-up delay-100" style={{ fontSize: '3.5rem' }}>
                            We Engineer <span className="text-gradient">Growth</span>
                        </h1>
                        <p className="hero-desc animate-fade-in-up delay-200" style={{ maxWidth: '750px', margin: '1rem auto' }}>
                            Adlearnr is a premier data-driven digital marketing agency dedicated to scaling ambitious brands.
                            We don't just run ads; we engineer growth systems tailored to your brand's unique needs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section bg-light" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div className="about-content animate-fade-in-up delay-300" style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--clr-bg-card)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--clr-text-main)' }}>Our Mission</h2>
                        <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            At Adlearnr, our mission is to empower businesses with cutting-edge marketing strategies that deliver measurable, scalable results. In a world of vanity metrics and empty promises, we stand for transparency, data-backed decisions, and relentless optimization.
                        </p>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--clr-text-main)' }}>Why Choose Us?</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '2rem', background: 'var(--clr-bg-dark)', borderRadius: '1rem' }}>
                                <i className="fa-solid fa-chart-line" style={{ fontSize: '2rem', color: 'var(--clr-primary)', marginBottom: '1rem' }}></i>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Data-Driven Strategy</h3>
                                <p style={{ color: 'var(--clr-text-muted)', margin: 0 }}>We eliminate the guesswork by relying on hard data and advanced analytics to guide every campaign decision.</p>
                            </div>
                            <div style={{ padding: '2rem', background: 'var(--clr-bg-dark)', borderRadius: '1rem' }}>
                                <i className="fa-solid fa-users-gear" style={{ fontSize: '2rem', color: 'var(--clr-primary)', marginBottom: '1rem' }}></i>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Expert Team</h3>
                                <p style={{ color: 'var(--clr-text-muted)', margin: 0 }}>Our seasoned professionals specialize in performance marketing, creative strategy, and conversion rate optimization.</p>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--clr-text-main)' }}>Our Values</h2>
                        <ul style={{ color: 'var(--clr-text-muted)', fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--clr-text-main)' }}>Transparency:</strong> Clear reporting and honest communication.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--clr-text-main)' }}>Innovation:</strong> Constantly testing new platforms and strategies to stay ahead.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--clr-text-main)' }}>Partnership:</strong> We treat your budget as if it were our own, aiming for true ROI.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
