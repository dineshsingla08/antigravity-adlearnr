import React from 'react';
import { useIntersect } from '../hooks/useIntersect';

const Onboarding = () => {
    const containerRef = useIntersect({ threshold: 0.1 });

    return (
        <section className="onboarding section" id="onboarding">
            <div className="container" ref={containerRef}>
                <div className="section-header animate-fade-in-up">
                    <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
                    <p className="section-subtitle">Our streamlined onboarding process gets your campaigns live quickly and efficiently.</p>
                </div>
                <div className="onboarding-steps">
                    <div className="step-card animate-fade-in-up delay-100">
                        <div className="step-number">01</div>
                        <h3>Discovery Call</h3>
                        <p>We discuss your goals, current metrics, and determine if we are the right fit for your brand.</p>
                    </div>
                    <div className="step-card animate-fade-in-up delay-200">
                        <div className="step-number">02</div>
                        <h3>Strategy & Audit</h3>
                        <p>Our team audits your account and crafts a customized strategy to hit your target ROAS.</p>
                    </div>
                    <div className="step-card animate-fade-in-up delay-300">
                        <div className="step-number">03</div>
                        <h3>Launch & Scale</h3>
                        <p>We launch the new campaigns, monitor the data closely, and scale the winners predictably.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Onboarding;
