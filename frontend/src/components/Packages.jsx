import React from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Packages = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    return (
        <section className="packages section" id="packages">
            <div className="container" ref={containerRef}>
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">Transparent <span className="text-gradient">Pricing</span></h2>
                    <p className="section-subtitle">
                        Choose the package that aligns with your current growth stage. No hidden fees.
                    </p>
                </div>

                <div className="packages-grid">
                    {/* Package 1 */}
                    <div className="package-card animate-fade-in-up delay-100">
                        <div className="package-icon"><i className="fa-solid fa-rocket"></i></div>
                        <h3 className="package-name">Starter</h3>
                        <div className="package-price">₹19,999<span>/mo</span></div>
                        <ul className="package-features">
                            <li><i className="fa-solid fa-check"></i> Up to ₹4L Ad Spend Management</li>
                            <li><i className="fa-solid fa-check"></i> 2 Ad Concepts/Month</li>
                            <li><i className="fa-solid fa-check"></i> Basic Account Audit</li>
                            <li><i className="fa-solid fa-check"></i> Monthly Reporting</li>
                            <li className="disabled"><i className="fa-solid fa-xmark"></i> 1-on-1 Strategy Calls</li>
                            <li className="disabled"><i className="fa-solid fa-xmark"></i> Custom Landing Pages</li>
                        </ul>
                        <a href="#contact" className="btn btn-outline">Choose Starter</a>
                    </div>

                    {/* Package 2 (Popular) */}
                    <div className="package-card popular animate-fade-in-up delay-200">
                        <div className="popular-badge">Most Popular</div>
                        <div className="package-icon"><i className="fa-solid fa-fire"></i></div>
                        <h3 className="package-name">Growth</h3>
                        <div className="package-price">₹39,999<span>/mo</span></div>
                        <ul className="package-features">
                            <li><i className="fa-solid fa-check"></i> Up to ₹16L Ad Spend</li>
                            <li><i className="fa-solid fa-check"></i> 5 Ad Concepts/Month</li>
                            <li><i className="fa-solid fa-check"></i> Comprehensive Audit</li>
                            <li><i className="fa-solid fa-check"></i> Bi-Weekly Reporting</li>
                            <li><i className="fa-solid fa-check"></i> 1 Monthly Strategy Call</li>
                            <li className="disabled"><i className="fa-solid fa-xmark"></i> Custom Landing Pages</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary">Choose Growth</a>
                    </div>

                    {/* Package 3 */}
                    <div className="package-card animate-fade-in-up delay-300">
                        <div className="package-icon"><i className="fa-solid fa-bolt"></i></div>
                        <h3 className="package-name">Scale</h3>
                        <div className="package-price">₹59,999<span>/mo</span></div>
                        <ul className="package-features">
                            <li><i className="fa-solid fa-check"></i> Unlimited Ad Spend</li>
                            <li><i className="fa-solid fa-check"></i> Unlimited Ad Concepts</li>
                            <li><i className="fa-solid fa-check"></i> Continuous Audits</li>
                            <li><i className="fa-solid fa-check"></i> Weekly Reporting</li>
                            <li><i className="fa-solid fa-check"></i> Bi-Weekly Strategy Calls</li>
                            <li><i className="fa-solid fa-check"></i> Custom Landing Page Design</li>
                        </ul>
                        <a href="#contact" className="btn btn-outline">Choose Scale</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;
