import React from 'react';
import { useIntersect } from '../hooks/useIntersect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Services = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    const services = [
        {
            title: "Performance Marketing & Ads",
            desc: "Meta, Google, LinkedIn, TikTok, & Amazon Campaigns.",
            icon: "fa-bullseye",
            delay: "100ms"
        },
        {
            title: "Search Engine Optimization",
            desc: "Rank higher organically and capture high-intent search traffic.",
            icon: "fa-trophy",
            delay: "200ms"
        },
        {
            title: "Social Media Management",
            desc: "Organic growth, community building, and brand identity on social platforms.",
            icon: "fa-hashtag",
            delay: "300ms"
        },
        {
            title: "Content & Video Production",
            desc: "Scroll-stopping ad creatives, Reels, TikToks, and graphic design.",
            icon: "fa-video",
            delay: "400ms"
        },
        {
            title: "Email & Retention Marketing",
            desc: "Automated email flows, newsletters, and SMS marketing for LTV.",
            icon: "fa-envelope-open-text",
            delay: "500ms"
        },
        {
            title: "Conversion Rate Optimization",
            desc: "Landing page testing, user behavior analysis, and UI/UX audits.",
            icon: "fa-chart-pie",
            delay: "600ms"
        },
        {
            title: "Lead Gen & eCommerce",
            desc: "End-to-end B2B/B2C strategies to maximize your sales pipeline.",
            icon: "fa-funnel-dollar",
            delay: "700ms"
        },
        {
            title: "Strategy & Consultation",
            desc: "Media planning, ad account audits, and one-on-one consulting.",
            icon: "fa-chess-knight",
            delay: "800ms"
        }
    ];

    return (
        <section className="services section" id="services" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Subtle background glow for the whole section to blend it */}
            <div className="section-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(138,76,219,0.05) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }}></div>

            <div className="container" ref={containerRef} style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">Our Expertise <span className="text-gradient">Your Growth</span></h2>
                    <p className="section-subtitle">
                        We don't just run ads. We engineer growth systems tailored to your brand's unique needs.
                    </p>
                </div>

                <div className="services-list-container" style={{ marginTop: '4rem', paddingBottom: '2rem' }}>
                    <div className="services-blend-grid">
                        {services.map((svc, idx) => (
                            <div key={idx} className={`service-seamless animate-fade-in-up`} style={{ animationDelay: svc.delay }}>
                                <div className="service-icon-wrapper">
                                    <i className={`fa-solid ${svc.icon}`}></i>
                                </div>
                                <div className="service-content-wrapper">
                                    <h3>{svc.title}</h3>
                                    <p>{svc.desc}</p>
                                    <a href="/#contact" className="service-link-animated">
                                        <span>Explore</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
