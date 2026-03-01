import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-logo-container">
                <img
                    src="/assets/logo.png"
                    alt="Adlearnr Logo"
                    className="loading-logo"
                />
                <div className="loading-bar-wrapper">
                    <div className="loading-bar-fill"></div>
                </div>
                <p className="loading-text">Optimizing Your Growth...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
