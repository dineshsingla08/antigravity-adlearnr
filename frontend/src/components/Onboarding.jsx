import React from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Onboarding = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    const steps = [
        {
            num: "01",
            title: "Discovery Call",
            desc: "We dive deep into your brand's unique goals, current metrics, and determine if our growth systems are the right fit for you.",
            icon: "fa-solid fa-bullseye"
        },
        {
            num: "02",
            title: "Strategy & Audit",
            desc: "Our team conducts a comprehensive audit of your ad account and crafts a customized strategy designed to hit your target ROAS.",
            icon: "fa-solid fa-magnifying-glass-chart"
        },
        {
            num: "03",
            title: "Launch Campaigns",
            desc: "We implement the strategy with fresh ad creatives and flawless tracking. We launch exactly what is needed to capture ready-to-buy audiences.",
            icon: "fa-solid fa-rocket"
        },
        {
            num: "04",
            title: "Scale Predictably",
            desc: "Once data starts flowing, we aggressively scale the winning ads, kill the underperformers, and maximize your brand's profitability.",
            icon: "fa-solid fa-chart-line"
        }
    ];

    return (
        <section className="onboarding section" id="onboarding" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
            {/* Background elements */}
            <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(138,76,219,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none', animation: 'float 10s ease-in-out infinite' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(138,76,219,0.05) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none', animation: 'float 14s ease-in-out infinite alternate-reverse' }}></div>

            <div className="container" ref={containerRef} style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-header animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ fontSize: '3rem' }}>How It <span className="text-gradient">Works</span></h2>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        A battle-tested, streamlined framework designed to eliminate guesswork and reliably generate profitable growth for your brand.
                    </p>
                </div>

                <div className="onboarding-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', position: 'relative' }}>
                    {steps.map((step, index) => (
                        <div key={index} className={`step-card animate-fade-in-up delay-${Math.min((index + 1) * 100, 400)}`} style={{
                            background: 'var(--clr-bg-card)',
                            border: '1px solid var(--clr-border)',
                            borderRadius: '1.5rem',
                            padding: '3rem 2rem',
                            position: 'relative',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-15px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(138,76,219,0.15)';
                                e.currentTarget.style.borderColor = 'var(--clr-primary)';
                                e.currentTarget.querySelector('.step-bg-num').style.transform = 'scale(1.2) rotate(-5deg)';
                                e.currentTarget.querySelector('.step-bg-num').style.opacity = '0.08';
                                e.currentTarget.querySelector('.step-icon-inner').style.transform = 'scale(1.2) rotate(10deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                                e.currentTarget.style.borderColor = 'var(--clr-border)';
                                e.currentTarget.querySelector('.step-bg-num').style.transform = 'scale(1) rotate(0)';
                                e.currentTarget.querySelector('.step-bg-num').style.opacity = '0.03';
                                e.currentTarget.querySelector('.step-icon-inner').style.transform = 'scale(1) rotate(0)';
                            }}>
                            {/* Giant background number */}
                            <div className="step-bg-num" style={{ position: 'absolute', top: '10px', right: '-10px', fontSize: '9rem', fontWeight: '900', color: 'var(--clr-primary)', opacity: '0.03', transition: 'all 0.5s ease', pointerEvents: 'none', lineHeight: 1, userSelect: 'none' }}>{step.num}</div>

                            <div className="step-icon" style={{ display: 'inline-flex', color: 'var(--clr-primary)', fontSize: '3rem', marginBottom: '1.5rem' }}>
                                <i className={`${step.icon} step-icon-inner`} style={{ transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}></i>
                            </div>


                            <h3 style={{ fontSize: '1.4rem', color: 'var(--clr-text-main)', marginBottom: '1rem', position: 'relative', zIndex: 1, lineHeight: 1.3 }}>{step.title}</h3>
                            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                    100% { transform: translateY(0px); }
                }
            `}} />
        </section>
    );
};

export default Onboarding;
