import React from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Courses = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    const courses = [
        {
            title: "Meta Ads Mastery",
            desc: "The complete, battle-tested blueprint used to scale brands from ground zero to 7-figures and beyond.",
            icon: "fa-solid fa-graduation-cap",
            price: "₹XXXX",
            popular: true,
            features: [
                "Advanced CBO & ABO Scaling",
                "Bulletproof Pixel Setup",
                "Retargeting Architectures",
                "Deep-Dive Data Analysis"
            ]
        },
        {
            title: "Ad Creatives That Convert",
            desc: "Stop burning money on bad creatives. Learn the psychology behind thumb-stopping ads that drive massive ROAS.",
            icon: "fa-solid fa-bullseye",
            price: "₹XXXX",
            popular: false,
            features: [
                "Scripting High-Converting video",
                "Sourcing User Generated Content",
                "Proven Image Ad Structures",
                "Scientific A/B Testing"
            ]
        }
    ];

    return (
        <section className="courses section" id="courses" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
            {/* Background elements */}
            <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(138,76,219,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none', animation: 'float 9s ease-in-out infinite' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '35vw', height: '35vw', background: 'radial-gradient(circle, rgba(30,95,186,0.06) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none', animation: 'float 13s ease-in-out infinite alternate-reverse' }}></div>

            <div className="container" ref={containerRef} style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-header animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ fontSize: '3rem' }}>Master <span className="text-gradient">Meta Ads</span></h2>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Learn the exact strategies we use to generate millions in profitable ad spend.
                    </p>
                </div>

                <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {courses.map((course, index) => (
                        <div key={index} className={`course-card animate-fade-in-up delay-${(index + 1) * 100}`} style={{
                            background: 'var(--clr-bg-card)',
                            border: course.popular ? '2px solid var(--clr-primary)' : '1px solid var(--clr-border)',
                            borderRadius: '1.5rem',
                            padding: '3rem',
                            position: 'relative',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            overflow: 'hidden',
                            boxShadow: course.popular ? '0 10px 30px rgba(138,76,219,0.1)' : '0 4px 10px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-15px)';
                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(138,76,219,0.15)';
                                e.currentTarget.style.borderColor = 'var(--clr-primary)';
                                e.currentTarget.querySelector('.course-icon').style.transform = 'scale(1.15) rotate(5deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = course.popular ? '0 10px 30px rgba(138,76,219,0.1)' : '0 4px 10px rgba(0,0,0,0.05)';
                                e.currentTarget.style.borderColor = course.popular ? 'var(--clr-primary)' : 'var(--clr-border)';
                                e.currentTarget.querySelector('.course-icon').style.transform = 'scale(1) rotate(0)';
                            }}>

                            {course.popular && (
                                <>
                                    <div style={{ position: 'absolute', top: 0, left: '-100%', width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(138,76,219,0.05), transparent)', animation: 'shimmer 3s infinite' }}></div>
                                    <div className="popular-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--clr-primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', animation: 'pulseGlow 2s infinite' }}>Best Seller</div>
                                </>
                            )}

                            <div className="course-icon" style={{ display: 'inline-flex', color: 'var(--clr-primary)', fontSize: '3rem', marginBottom: '1.5rem', transition: 'transform 0.3s ease' }}>
                                <i className={course.icon}></i>
                            </div>

                            <h3 style={{ fontSize: '1.8rem', color: 'var(--clr-text-main)', marginBottom: '1rem', lineHeight: 1.2 }}>{course.title}</h3>
                            <p style={{ color: 'var(--clr-text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{course.desc}</p>

                            <ul className="package-features" style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1 }}>
                                {course.features && course.features.map((feature, i) => (
                                    <li key={i} style={{ marginBottom: '0.8rem', color: 'var(--clr-text-main)', display: 'flex', gap: '10px', fontSize: '0.95rem' }}>
                                        <i className="fa-solid fa-check" style={{ color: 'var(--clr-primary)', marginTop: '4px' }}></i> {feature}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', borderTop: '1px solid var(--clr-border)', paddingTop: '1.5rem' }}>
                                <span style={{ color: 'var(--clr-text-muted)', fontWeight: '500' }}>One-time payment</span>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--clr-text-main)', lineHeight: 1 }}>
                                    {course.price}
                                </div>
                            </div>

                            <a href="#contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '1.2rem' }}>Enroll Now <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i></a>
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
                @keyframes shimmer {
                    0% { left: -100%; }
                    50% { left: 100%; }
                    100% { left: 100%; }
                }
            `}} />
        </section>
    );
};

export default Courses;
