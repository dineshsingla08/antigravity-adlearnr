import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-logo-container">
                <img
                    src="/assets/loader.png"
                    alt="Adlearnr Logo"
                    className="loading-logo"
                />
                <p className="loading-text">Optimizing Your Growth...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;