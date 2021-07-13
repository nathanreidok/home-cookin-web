import React from 'react';
import './Loader.css'

type LoadProps = {
    isLoading: boolean
}

const Loader: React.FC<LoadProps> = ({ isLoading, children }) => {
    return (
        <>
            {isLoading ?
                <div className="loading">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                : children}
        </>
    );
}

export default Loader