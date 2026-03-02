import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blog = () => {
    // Scroll to top when loading the blog page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="blog-page">
            <section className="hero" style={{ padding: '8rem 0 4rem', minHeight: '50vh', position: 'relative', overflow: 'hidden' }}>
                <div className="section-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(138,76,219,0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div className="section-header" style={{ marginBottom: '2rem' }}>
                        <div className="hero-badge animate-fade-in-up" style={{ margin: '0 auto 1.5rem' }}>Our Insights</div>
                        <h1 className="hero-title animate-fade-in-up delay-100" style={{ fontSize: '4rem' }}>
                            Digital <span className="text-gradient">Marketing Blog</span>
                        </h1>
                        <p className="hero-desc animate-fade-in-up delay-200" style={{ maxWidth: '700px', margin: '1.5rem auto 0', fontSize: '1.2rem' }}>
                            Actionable strategies, deep-dive case studies, and industry news to help you stay ahead of the curve and dominate your market.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section bg-light" style={{ paddingBottom: '6rem' }}>
                <div className="container">
                    <div className="blog-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {blogPosts.map((post, index) => (
                            <Link to={`/blog/${post.id}`} key={index} className="blog-card-link animate-fade-in-up" style={{
                                animationDelay: `${index * 100}ms`,
                                border: '1px solid var(--clr-border)',
                                borderRadius: '1.5rem',
                                background: 'var(--clr-bg-card)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(138,76,219,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}>
                                <div className="blog-image-wrapper" style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        className="blog-image"
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--clr-primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                                        {post.category}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.4', color: 'var(--clr-text-main)' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--clr-text-muted)', marginBottom: '1.5rem', flexGrow: '1', lineHeight: '1.6' }}>{post.excerpt}</p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--clr-border)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>
                                            <span><i className="fa-regular fa-calendar" style={{ marginRight: '0.4rem' }}></i> {post.date}</span>
                                            <span><i className="fa-regular fa-clock" style={{ marginRight: '0.4rem' }}></i> {post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
