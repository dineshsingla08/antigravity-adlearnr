import React, { useEffect } from 'react';

const Clients = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    const clients = [
        {
            name: "EcoStyle Apparel",
            niche: "Sustainable Fashion (eCommerce)",
            results: "450% Increase in ROAS within 90 days. Scaled monthly ad spend from ₹2L to ₹15L while maintaining profitability.",
            icon: "fa-solid fa-shirt",
            color: "#10b981"
        },
        {
            name: "FitLife Tech",
            niche: "Fitness App Subscriptions",
            results: "Decreased Cost-Per-Acquisition (CPA) by 60%. Generated 15,000+ new active paying users in 6 months using advanced lookalike modeling.",
            icon: "fa-solid fa-dumbbell",
            color: "#f59e0b"
        },
        {
            name: "Urban Oasis Realty",
            niche: "Luxury Real Estate",
            results: "Generated 300+ highly qualified leads for a premium property launch, resulting in ₹120Cr+ in closed sales revenue.",
            icon: "fa-solid fa-building",
            color: "#3b82f6"
        },
        {
            name: "Gourmet Direct",
            niche: "D2C Food & Beverage",
            results: "Boosted repeat purchase rate by 45% through aggressive retention campaigns and optimized retargeting flows.",
            icon: "fa-solid fa-utensils",
            color: "#ef4444"
        },
        {
            name: "SaaSify Solutions",
            niche: "B2B Software",
            results: "Scaled booked demo meetings by 3x YoY. Implemented complex lead generation funnels specifically targeting enterprise CTOs.",
            icon: "fa-solid fa-code",
            color: "#8b5cf6"
        },
        {
            name: "Lumina Skincare",
            niche: "Beauty & Cosmetics",
            results: "Achieved a 7-figure product launch week utilizing viral TikTok creatives cross-pollinated to high-budget Meta Ad scaling.",
            icon: "fa-solid fa-spa",
            color: "#ec4899"
        }
    ];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--clr-bg-darker)' }}>
            <div className="container" style={{ padding: '4rem var(--space-md)' }}>
                <div className="section-header animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="hero-badge" style={{ margin: '0 auto 1rem', display: 'inline-block' }}>Proven Track Record</div>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Clients & <span className="text-gradient">Results</span></h1>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        We don't just run ads. We architect sophisticated growth engines that produce measurable, life-changing ROI for our partners.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {clients.map((client, index) => (
                        <div key={index} className={`animate-fade-in-up delay-${Math.min((index + 1) * 100, 500)}`} style={{
                            background: 'var(--clr-bg-card)',
                            borderRadius: '1.5rem',
                            padding: '2.5rem',
                            border: '1px solid var(--clr-border)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = client.color;
                                e.currentTarget.querySelector('.client-icon-wrapper').style.background = client.color;
                                e.currentTarget.querySelector('.client-icon-wrapper').style.color = 'white';
                                e.currentTarget.querySelector('.client-icon-wrapper').style.transform = 'scale(1.1) rotate(5deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.03)';
                                e.currentTarget.style.borderColor = 'var(--clr-border)';
                                e.currentTarget.querySelector('.client-icon-wrapper').style.background = `rgba(${hexToRgb(client.color)}, 0.1)`;
                                e.currentTarget.querySelector('.client-icon-wrapper').style.color = client.color;
                                e.currentTarget.querySelector('.client-icon-wrapper').style.transform = 'scale(1) rotate(0)';
                            }}>

                            {/* Subtle Background Glow corresponding to brand color */}
                            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: `radial-gradient(circle, ${client.color}22 0%, transparent 70%)`, pointerEvents: 'none' }}></div>

                            <div className="client-icon-wrapper" style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                background: `rgba(${hexToRgb(client.color)}, 0.1)`,
                                color: client.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                marginBottom: '1.5rem',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}>
                                <i className={client.icon}></i>
                            </div>

                            <h3 style={{ fontSize: '1.6rem', color: 'var(--clr-text-main)', marginBottom: '0.2rem' }}>{client.name}</h3>
                            <h4 style={{ fontSize: '1rem', color: client.color, fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{client.niche}</h4>

                            <div style={{ background: 'rgba(0,0,0,0.02)', padding: '1.5rem', borderRadius: '1rem', borderLeft: `4px solid ${client.color}` }}>
                                <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0, fontWeight: '500' }}>"{client.results}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta-container animate-fade-in-up delay-600" style={{ textAlign: 'center', marginTop: '5rem', padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))', borderRadius: '2rem', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to be our next success story?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>We partner with brands that are ready to scale aggressively. Let's discuss your targets.</p>
                    <a href="/#contact" className="btn" style={{ background: 'white', color: 'var(--clr-primary)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Book a Discovery Call</a>
                </div>
            </div>
        </div>
    );
};

// Helper function to convert Hex string to RGB format for transparency strings
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '138, 76, 219'; // Fallback to purple
}

export default Clients;
