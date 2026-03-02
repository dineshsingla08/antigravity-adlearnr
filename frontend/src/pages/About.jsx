import React, { useEffect } from 'react';

const About = () => {
    // Scroll to top when loading the about page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="hero" style={{ padding: '8rem 0 4rem', minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="section-glow" style={{ position: 'absolute', top: '10%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(138,76,219,0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <div className="hero-badge animate-fade-in-up" style={{ margin: '0 auto 1.5rem' }}>Our Story</div>
                        <h1 className="hero-title animate-fade-in-up delay-100" style={{ fontSize: '4rem', lineHeight: '1.2' }}>
                            We Don't Just Do Marketing.<br />We Engineer <span className="text-gradient">Growth.</span>
                        </h1>
                        <p className="hero-desc animate-fade-in-up delay-200" style={{ maxWidth: '750px', margin: '1.5rem auto 0', fontSize: '1.2rem' }}>
                            Adlearnr is a premier data-driven digital marketing agency dedicated to scaling ambitious brands. We blend creative brilliance with relentless performance metrics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
                <div className="container">
                    <div className="about-grid animate-fade-in-up delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div className="about-image-wrapper" style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(138,76,219,0.2) 0%, transparent 100%)', zIndex: 1 }}></div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team collaborating" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                        <div className="about-text">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--clr-text-main)' }}>Our <span className="text-gradient">Mission</span></h2>
                            <p style={{ color: 'var(--clr-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                At Adlearnr, our mission is to empower businesses with cutting-edge marketing strategies that deliver measurable, scalable results. In a world of vanity metrics and empty promises, we stand for transparency, data-backed decisions, and relentless optimization.
                            </p>
                            <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                We believe that behind every successful campaign is a deep understanding of human psychology mixed with rigorous mathematical modeling. We are your outsourced growth team.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '2rem', color: 'var(--clr-primary)', marginBottom: '0.5rem' }}>$10M+</h4>
                                    <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>Ad Spend Managed</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '2rem', color: 'var(--clr-primary)', marginBottom: '0.5rem' }}>3.5x</h4>
                                    <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>Average ROAS</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '2rem', color: 'var(--clr-primary)', marginBottom: '0.5rem' }}>50+</h4>
                                    <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>Brands Scaled</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section bg-light" style={{ padding: '6rem 0', background: 'var(--clr-bg-card)', borderTop: '1px solid var(--clr-border)', borderBottom: '1px solid var(--clr-border)' }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">Our <span className="text-gradient">Core Values</span></h2>
                        <p className="section-subtitle">The principles that drive every single campaign we build.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: 'fa-eye', title: 'Radical Transparency', desc: 'No black box operations. You see exactly where every dollar goes and the return it generates.' },
                            { icon: 'fa-flask', title: 'Relentless Testing', desc: 'We never settle for "good enough". We continuously A/B test creatives, copy, and audiences.' },
                            { icon: 'fa-handshake', title: 'True Partnership', desc: 'We treat your budget as if it were our own. We win only when your business scales profitably.' }
                        ].map((value, idx) => (
                            <div key={idx} className="value-card animate-fade-in-up" style={{ padding: '3rem 2rem', background: 'var(--clr-bg-dark)', borderRadius: '1.5rem', textAlign: 'center', transition: 'transform 0.3s ease', animationDelay: `${(idx + 1) * 100}ms` }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'rgba(138,76,219,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clr-primary)', fontSize: '2rem' }}>
                                    <i className={`fa-solid ${value.icon}`}></i>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--clr-text-main)' }}>{value.title}</h3>
                                <p style={{ color: 'var(--clr-text-muted)', lineHeight: '1.6' }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--clr-text-main)' }}>Ready to Scale?</h2>
                    <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Join the ranks of top-performing brands who trust Adlearnr to drive their growth.</p>
                    <a href="/#contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Get Your Free Audit <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default About;
