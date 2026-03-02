import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <main className="blog-post-page" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
            {/* Hero area of the blog post */}
            <header className="blog-post-header" style={{ position: 'relative', height: '50vh', minHeight: '400px', display: 'flex', alignItems: 'flex-end', paddingBottom: '3rem', color: 'white' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2 }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,15,15,1) 0%, rgba(15,15,15,0.7) 50%, rgba(15,15,15,0.3) 100%)', zIndex: -1 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Link to="/blog" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--clr-primary)', fontWeight: 'bold' }}>
                        <i className="fa-solid fa-arrow-left" style={{ marginRight: '0.5rem' }}></i> Back to Blog
                    </Link>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem', color: '#ccc' }}>
                        <span style={{ background: 'var(--clr-primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>{post.category}</span>
                        <span><i className="fa-regular fa-calendar" style={{ marginRight: '0.5rem' }}></i> {post.date}</span>
                        <span><i className="fa-regular fa-clock" style={{ marginRight: '0.5rem' }}></i> {post.readTime}</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2', maxWidth: '900px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{post.title}</h1>
                </div>
            </header>

            {/* Content area */}
            <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                <article className="blog-post-content" style={{ maxWidth: '800px', width: '100%', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--clr-text-muted)' }}>
                    <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '<br/><br/>').replace(/### (.*)/g, '<h3 style="color:var(--clr-text-main); font-size:1.8rem; margin-top:2.5rem; margin-bottom:1rem;">$1</h3>').replace(/\*\*(.*)\*\*/g, '<strong style="color:white;">$1</strong>') }} />

                    <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--clr-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ margin: 0, color: 'var(--clr-text-main)', fontWeight: 'bold' }}>Share this article:</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--clr-bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clr-primary)', transition: 'background 0.3s', textDecoration: 'none' }}><i className="fa-brands fa-twitter"></i></a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--clr-bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clr-primary)', transition: 'background 0.3s', textDecoration: 'none' }}><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="social-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--clr-bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clr-primary)', transition: 'background 0.3s', textDecoration: 'none' }}><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </article>
            </div>

            {/* CTA in Blog Post */}
            <div className="container" style={{ marginTop: '5rem' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--clr-bg-card) 0%, rgba(138,76,219,0.1) 100%)', borderRadius: '1.5rem', padding: '4rem 2rem', textAlign: 'center', border: '1px solid var(--clr-border)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--clr-text-main)' }}>Ready to Get these Results?</h2>
                    <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Stop wasting ad spend. Let our team audit your account and build a scalable growth strategy tailored for your brand.</p>
                    <Link to="/#contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Request Free Audit</Link>
                </div>
            </div>
        </main>
    );
};

export default BlogPost;
