import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Onboarding from '../components/Onboarding';
import Courses from '../components/Courses';
import Contact from '../components/Contact';

const Home = () => {
    const { hash } = useLocation();

    // Scroll to section if hash is present
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <main>
            <Hero />
            <Services />
            <Packages />
            <Onboarding />
            <Courses />
            <Contact />
        </main>
    );
};

export default Home;
