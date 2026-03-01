import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-logo-container">
                <img
                    src="https://yt3.googleusercontent.com/FFMjXbcreDZDf6ytyk7oUK8HFpm2Nz5EssQuWzPzx2bqvdgO0We1wGe_r1PXvbMBlIyFkUe78g=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
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
