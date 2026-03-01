import React from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Courses = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    return (
        <section className="courses section" id="courses">
            <div className="container" ref={containerRef}>
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">Master <span className="text-gradient">Meta Ads</span></h2>
                    <p className="section-subtitle">Learn the exact strategies we use to generate millions in profitable ad spend.</p>
                </div>

                <div className="services-grid"> {/* Reusing the services grid layout for consistency */}
                    <div className="course-card service-card animate-fade-in-up delay-100">
                        <div className="service-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                        <h3>Meta Ads Mastery</h3>
                        <p>From beginner to advanced. Learn campaign structure, pixel tracking, and scaling tactics.</p>
                        <div className="course-price">₹39,999</div>
                        <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Enroll Now</a>
                    </div>

                    <div className="course-card service-card animate-fade-in-up delay-200">
                        <div className="service-icon"><i className="fa-solid fa-bullseye"></i></div>
                        <h3>Ad Creatives That Convert</h3>
                        <p>The core framework for creating thumb-stopping images and videos that drive sales reliably.</p>
                        <div className="course-price">₹14,999</div>
                        <a href="#contact" className="btn btn-outline" style={{ width: '100%' }}>Enroll Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
