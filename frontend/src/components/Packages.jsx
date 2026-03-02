import React from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Packages = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    return (
        <section className="packages section" id="packages" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
            {/* Background Glows for Premium Vibe with Float Animation */}
            <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(138,76,219,0.1) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none', animation: 'float 8s ease-in-out infinite' }}></div>
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(138,76,219,0.08) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none', animation: 'float 12s ease-in-out infinite alternate-reverse' }}></div>

            <div className="container" ref={containerRef} style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">Transparent <span className="text-gradient">Pricing</span></h2>
                    <p className="section-subtitle">
                        Choose the package that aligns with your current growth stage. No hidden fees.
                    </p>
                </div>

                <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center', marginTop: '3rem' }}>
                    <div className="package-card animate-fade-in-up delay-100" style={{ background: 'var(--clr-bg-card)', border: '1px solid var(--clr-border)', borderRadius: '1.5rem', padding: '3rem', position: 'relative', overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-15px)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(138,76,219,0.15)'; e.currentTarget.style.borderColor = 'var(--clr-primary)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--clr-border)'; }}>
                        <div style={{ color: 'var(--clr-primary)', marginBottom: '1.5rem', fontSize: '3rem', transition: 'transform 0.3s ease', display: 'inline-block' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0)'}>
                            <i className="fa-solid fa-rocket"></i>
                        </div>
                        <h3 className="package-name" style={{ fontSize: '1.8rem', color: 'var(--clr-text-main)', marginBottom: '0.5rem' }}>Starter</h3>
                        <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>Perfect for new businesses ready to test the waters with proper tracking.</p>
                        <div className="package-price" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--clr-text-main)', marginBottom: '2rem', borderBottom: '1px solid var(--clr-border)', paddingBottom: '2rem' }}>
                            ₹XXXX<span style={{ fontSize: '1.2rem', color: 'var(--clr-text-muted)' }}>/mo</span>
                        </div>
                        <ul className="package-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Up to ₹4L Ad Spend Mgmt</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> 2 New Ad Concepts/Month</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Basic Account Setup & Audit</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Monthly Performance Report</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', opacity: 0.5, display: 'flex', gap: '10px' }}><i className="fa-solid fa-xmark" style={{ marginTop: '4px' }}></i> 1-on-1 Strategy Calls</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '1.2rem' }}>Choose Starter</a>
                    </div>

                    {/* Package 2 (Popular) */}
                    <div className="package-card popular animate-fade-in-up delay-200" style={{ background: 'var(--clr-bg-card)', border: '2px solid var(--clr-primary)', borderRadius: '1.5rem', padding: '3.5rem 3rem', position: 'relative', overflow: 'hidden', transform: 'scale(1.05)', boxShadow: '0 20px 50px rgba(138,76,219,0.15)', zIndex: 1, minHeight: '650px', display: 'flex', flexDirection: 'column', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-15px)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(138,76,219,0.25)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(138,76,219,0.15)'; }}>
                        {/* Shimmer effect */}
                        <div style={{ position: 'absolute', top: 0, left: '-100%', width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(138,76,219,0.05), transparent)', animation: 'shimmer 3s infinite' }}></div>

                        <div className="popular-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--clr-primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', animation: 'pulseGlow 2s infinite' }}>Most Popular</div>

                        <div style={{ color: 'var(--clr-primary)', marginBottom: '1.5rem', fontSize: '3rem', transition: 'transform 0.3s ease', display: 'inline-block' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0)'}>
                            <i className="fa-solid fa-fire"></i>
                        </div>
                        <h3 className="package-name" style={{ fontSize: '2rem', color: 'var(--clr-text-main)', marginBottom: '0.5rem' }}>Growth</h3>
                        <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>For established brands wanting aggressive scaling and deep insights.</p>

                        <div className="package-price" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--clr-text-main)', marginBottom: '2rem', borderBottom: '1px solid var(--clr-border)', paddingBottom: '2rem' }}>
                            ₹XXXX<span style={{ fontSize: '1.2rem', color: 'var(--clr-text-muted)' }}>/mo</span>
                        </div>

                        <ul className="package-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1 }}>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-main)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Up to ₹16L Ad Spend Mgmt</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-main)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> 5 New Ad Concepts/Month</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-main)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Comprehensive CRO Audit</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-main)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Bi-Weekly Reporting</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-main)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> 1 Monthly Strategy Call</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '1.2rem' }}>Choose Growth</a>
                    </div>

                    {/* Package 3 */}
                    <div className="package-card animate-fade-in-up delay-300" style={{ background: 'var(--clr-bg-card)', border: '1px solid var(--clr-border)', borderRadius: '1.5rem', padding: '3rem', position: 'relative', overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-15px)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(138,76,219,0.15)'; e.currentTarget.style.borderColor = 'var(--clr-primary)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--clr-border)'; }}>
                        <div style={{ color: 'var(--clr-primary)', marginBottom: '1.5rem', fontSize: '3rem', transition: 'transform 0.3s ease', display: 'inline-block' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0)'}>
                            <i className="fa-solid fa-bolt"></i>
                        </div>
                        <h3 className="package-name" style={{ fontSize: '1.8rem', color: 'var(--clr-text-main)', marginBottom: '0.5rem' }}>Scale</h3>
                        <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>Enterprise-level structure for massive budgets. We act as your CMO.</p>
                        <div className="package-price" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--clr-text-main)', marginBottom: '2rem', borderBottom: '1px solid var(--clr-border)', paddingBottom: '2rem' }}>
                            ₹XXXX<span style={{ fontSize: '1.2rem', color: 'var(--clr-text-muted)' }}>/mo</span>
                        </div>
                        <ul className="package-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Unlimited Ad Spend Mgmt</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Unlimited Ad Concepts</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Continuous CRO & Setup</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Custom Real-Time Dashboard</li>
                            <li style={{ marginBottom: '1rem', color: 'var(--clr-text-muted)', display: 'flex', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> Bi-Weekly Strategy Calls</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '1.2rem' }}>Choose Scale</a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    0% { left: -100%; }
                    50% { left: 100%; }
                    100% { left: 100%; }
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                    100% { transform: translateY(0px); }
                }
            `}} />
        </section>
    );
};

export default Packages;
