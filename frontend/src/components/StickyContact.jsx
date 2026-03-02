import React, { useState } from 'react';

const StickyContact = () => {
    const [showPhone, setShowPhone] = useState(false);

    return (
        <>
            {/* Call Sticky Component */}
            <div
                className={`phone-sticky ${showPhone ? 'expanded' : ''}`}
                onMouseEnter={() => setShowPhone(true)}
                onMouseLeave={() => setShowPhone(false)}
                onClick={() => setShowPhone(!showPhone)}
                style={{
                    position: 'fixed',
                    bottom: '6.5rem',
                    right: '2.25rem',
                    backgroundColor: 'var(--clr-primary)',
                    color: 'white',
                    height: '52px',
                    width: showPhone ? 'auto' : '52px',
                    padding: showPhone ? '0 1.5rem' : '0',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                }}
            >
                <i className="fa-solid fa-phone" style={{
                    animation: showPhone ? 'none' : 'waBouncePulse 2s infinite 1s',
                    borderRadius: '50%',
                    width: '52px',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}></i>

                {showPhone && (
                    <a
                        href="tel:+919729526111"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: '600',
                            marginLeft: '-0.5rem',
                            paddingRight: '0.5rem'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        +91 9729526111
                    </a>
                )}
            </div>

            {/* Sticky WhatsApp Icon */}
            <a
                href="https://wa.me/919729526111"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-sticky"
                aria-label="Chat with us on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </>
    );
};

export default StickyContact;
