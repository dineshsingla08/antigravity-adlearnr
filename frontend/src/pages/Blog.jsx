import React, { useEffect } from 'react';

const Blog = () => {
    // Scroll to top when loading the blog page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const blogPosts = [
        {
            title: "5 Proven Strategies to Boost Your ROAS on Meta Ads",
            date: "Oct 24, 2023",
            category: "Meta Ads",
            excerpt: "Learn how we helped a leading eCommerce client increase their return on ad spend from 2.5X to 5X in just 30 days using advanced audience targeting...",
            readTime: "5 min read",
        },
        {
            title: "The Ultimate Guide to B2B Lead Generation on LinkedIn",
            date: "Nov 02, 2023",
            category: "LinkedIn",
            excerpt: "B2B marketing requires precision. Discover our blueprint for capturing high-intent leads on LinkedIn without wasting your marketing budget.",
            readTime: "8 min read",
        },
        {
            title: "Search Engine Optimization: Beyond the Basics in 2024",
            date: "Nov 15, 2023",
            category: "SEO",
            excerpt: "Ranking on the first page of Google is getting harder. Here are the technical SEO techniques that are moving the needle right now.",
            readTime: "6 min read",
        },
        {
            title: "How to Scale an Activewear Brand to ₹2Cr/Month",
            date: "Dec 05, 2023",
            category: "Case Study",
            excerpt: "A deep dive into the campaign structure, creative strategies, and scaling methods we used to 10X an Indian activewear startup.",
            readTime: "10 min read",
        },
        {
            title: "Navigating the New Google Ads Updates",
            date: "Jan 12, 2024",
            category: "Google Ads",
            excerpt: "Google's latest algorithm update changes how Performance Max campaigns work. Keep your campaigns profitable by following these tips.",
            readTime: "4 min read",
        },
        {
            title: "Why Most Agency Audits Miss the Mark",
            date: "Feb 08, 2024",
            category: "Strategy",
            excerpt: "Are you losing money without knowing it? Understand the common pitfalls in ad accounts that superficial audits completely overlook.",
            readTime: "7 min read",
        }
    ];

    return (
        <main className="blog-page">
            <section className="hero" style={{ paddingBottom: '3rem', minHeight: '50vh', alignContent: 'center' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <div className="hero-badge animate-fade-in-up" style={{ margin: '0 auto 1.5rem' }}>Our Insights</div>
                        <h1 className="hero-title animate-fade-in-up delay-100" style={{ fontSize: '3.5rem' }}>
                            Digital <span className="text-gradient">Marketing Blog</span>
                        </h1>
                        <p className="hero-desc animate-fade-in-up delay-200" style={{ maxWidth: '700px', margin: '1rem auto' }}>
                            Actionable strategies, deep-dive case studies, and industry news to help you stay ahead of the curve and dominate your market.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section bg-light" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div className="blog-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {blogPosts.map((post, index) => (
                            <div key={index} className="service-card animate-fade-in-up" style={{
                                animationDelay: `${index * 100}ms`,
                                border: 'none',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                padding: '2.5rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.875rem' }}>
                                    <span style={{ color: 'var(--clr-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category}</span>
                                    <span style={{ color: 'var(--clr-text-muted)' }}>{post.readTime}</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.4' }}>{post.title}</h3>
                                <p style={{ color: 'var(--clr-text-muted)', marginBottom: '1.5rem', flexGrow: '1' }}>{post.excerpt}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>{post.date}</span>
                                    <a href="#" className="service-link" style={{ margin: '0' }}>Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
