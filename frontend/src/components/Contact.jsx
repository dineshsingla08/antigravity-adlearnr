import React, { useState } from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Contact = () => {
    const containerRef = useIntersect({ threshold: 0.1 });
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const revenue = document.getElementById('revenue').value;
        const message = document.getElementById('message').value;

        try {
            const response = await fetch('http://localhost:5000/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, company, phone, service, revenue, message })
            });

            if (response.ok) {
                setShowPopup(true);
            } else {
                alert('We encountered an error processing your request. Please try again later.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to connect to the backend server. Is it running?');
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        document.getElementById('contact-form').reset();
    };

    return (
        <section className="contact section" id="contact">
            <div className="container" ref={containerRef}>
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">Ready to <span className="text-gradient">Scale?</span></h2>
                    <p className="section-subtitle">Fill out the form below to apply for a free strategy session with our expert team.</p>
                </div>

                <div className="contact-form-container animate-fade-in-up delay-200" style={{ maxWidth: '800px', margin: '2rem auto 0', padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
                    <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <label htmlFor="name" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Full Name *</label>
                                <input type="text" id="name" required placeholder="John Doe" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)' }} />
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <label htmlFor="email" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Email Address *</label>
                                <input type="email" id="email" required placeholder="john@company.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)' }} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <label htmlFor="company" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Company Name *</label>
                                <input type="text" id="company" required placeholder="Acme Corp" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)' }} />
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <label htmlFor="phone" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Phone Number</label>
                                <input type="tel" id="phone" placeholder="+1 (555) 000-0000" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)' }} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <label htmlFor="service" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Service of Interest *</label>
                                <select id="service" required style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                                    <option value="">Select a service</option>
                                    <option value="performance">Performance Marketing & Ads</option>
                                    <option value="lead-gen">Lead Generation & eCommerce</option>
                                    <option value="seo">Search Engine Optimization</option>
                                    <option value="consulting">Strategy & Consultation</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <label htmlFor="revenue" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Monthly Revenue</label>
                                <select id="revenue" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                                    <option value="">Select your current stage</option>
                                    <option value="under-10l">Under ₹10L / month</option>
                                    <option value="10l-50l">₹10L - ₹50L / month</option>
                                    <option value="50l-1cr">₹50L - ₹1Cr / month</option>
                                    <option value="over-1cr">Over ₹1Cr / month</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <label htmlFor="message" style={{ fontWeight: '500', fontSize: '0.9rem' }}>Tell us about your brand</label>
                            <textarea id="message" rows="3" placeholder="What are your goals and current roadblocks?" style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', resize: 'vertical' }}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%', padding: '1rem' }}>
                            Apply For Strategy Session <i className="fa-solid fa-arrow-right"></i>
                        </button>

                    </form>
                </div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    backdropFilter: 'blur(5px)'
                }}>
                    <div style={{
                        background: 'var(--clr-bg-card)',
                        padding: '3rem',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center',
                        maxWidth: '400px',
                        width: '90%',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}>
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '4rem', color: 'var(--clr-primary)', margin: '0 0 1.5rem 0' }}></i>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--clr-text-main)' }}>Request Submitted!</h3>
                        <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Thank you for reaching out. Our team will review your details and get back to you shortly.
                        </p>
                        <button onClick={closePopup} className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                            Done
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
