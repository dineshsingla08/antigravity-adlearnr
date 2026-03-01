import React from 'react';
import { useIntersect } from '../hooks/useIntersect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Services = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    return (
        <section className="services section" id="services">
            <div className="container" ref={containerRef}>
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">Our Expertise <span className="text-gradient">Your Growth</span></h2>
                    <p className="section-subtitle">
                        We don't just run ads. We engineer growth systems tailored to your brand's unique needs.
                    </p>
                </div>

                <div className="services-slider-container" style={{ marginTop: '3rem', paddingBottom: '2rem' }}>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 1.2, spaceBetween: 30 },
                            1024: { slidesPerView: 2, spaceBetween: 40 },
                        }}
                        modules={[Autoplay]}
                        className="services-swiper pb-4"
                    >
                        {/* Service 1 */}
                        <SwiperSlide>
                            <div className="service-row" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem', background: 'var(--clr-bg-dark)', borderRadius: '1rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', gap: '1.5rem' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(30,95,186,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.03)'; }}>
                                <div className="service-icon" style={{ margin: '0', background: 'linear-gradient(135deg, rgba(30,95,186,0.1), rgba(138,76,219,0.1))', width: '70px', height: '70px', borderRadius: '15px', color: 'var(--clr-primary)' }}><i className="fa-solid fa-bullseye" style={{ fontSize: '2rem' }}></i></div>
                                <div style={{ flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>Performance Marketing & Ads</h3>
                                    <p style={{ color: 'var(--clr-text-muted)', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>Meta, LinkedIn, SEM, Native, & Amazon Campaigns.</p>
                                </div>
                                <div>
                                    <a href="/#contact" className="service-link" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--clr-bg-darker)', borderRadius: '50px', transition: 'all 0.3s' }}>Explore <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service 2 */}
                        <SwiperSlide>
                            <div className="service-row" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem', background: 'var(--clr-bg-dark)', borderRadius: '1rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', gap: '1.5rem' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(30,95,186,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.03)'; }}>
                                <div className="service-icon" style={{ margin: '0', background: 'linear-gradient(135deg, rgba(30,95,186,0.1), rgba(138,76,219,0.1))', width: '70px', height: '70px', borderRadius: '15px', color: 'var(--clr-primary)' }}><i className="fa-solid fa-chart-line" style={{ fontSize: '2rem' }}></i></div>
                                <div style={{ flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>Lead Gen & eCommerce</h3>
                                    <p style={{ color: 'var(--clr-text-muted)', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>End-to-end B2B/B2C strategies to maximize your sales pipeline.</p>
                                </div>
                                <div>
                                    <a href="/#contact" className="service-link" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--clr-bg-darker)', borderRadius: '50px', transition: 'all 0.3s' }}>Explore <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service 3 */}
                        <SwiperSlide>
                            <div className="service-row" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem', background: 'var(--clr-bg-dark)', borderRadius: '1rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', gap: '1.5rem' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(30,95,186,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.03)'; }}>
                                <div className="service-icon" style={{ margin: '0', background: 'linear-gradient(135deg, rgba(30,95,186,0.1), rgba(138,76,219,0.1))', width: '70px', height: '70px', borderRadius: '15px', color: 'var(--clr-primary)' }}><i className="fa-solid fa-trophy" style={{ fontSize: '2rem' }}></i></div>
                                <div style={{ flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>Search Engine Optimization</h3>
                                    <p style={{ color: 'var(--clr-text-muted)', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>Rank higher organically and capture high-intent search traffic.</p>
                                </div>
                                <div>
                                    <a href="/#contact" className="service-link" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--clr-bg-darker)', borderRadius: '50px', transition: 'all 0.3s' }}>Explore <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Service 4 */}
                        <SwiperSlide>
                            <div className="service-row" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem', background: 'var(--clr-bg-dark)', borderRadius: '1rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', gap: '1.5rem' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(30,95,186,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.03)'; }}>
                                <div className="service-icon" style={{ margin: '0', background: 'linear-gradient(135deg, rgba(30,95,186,0.1), rgba(138,76,219,0.1))', width: '70px', height: '70px', borderRadius: '15px', color: 'var(--clr-primary)' }}><i className="fa-solid fa-lightbulb" style={{ fontSize: '2rem' }}></i></div>
                                <div style={{ flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>Strategy & Consultation</h3>
                                    <p style={{ color: 'var(--clr-text-muted)', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>Media planning, ad account auditing, and one-on-one consulting.</p>
                                </div>
                                <div>
                                    <a href="/#contact" className="service-link" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--clr-bg-darker)', borderRadius: '50px', transition: 'all 0.3s' }}>Explore <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Services;
