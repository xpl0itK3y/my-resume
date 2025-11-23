import React, { useState, useEffect } from "react";

const GlassBlock = ({ children, delay = 0 }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="glass-block"
            style={{
                animation: `slideIn 0.6s ease-out ${delay}s both`,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: isMobile ? '16px' : '20px',
                padding: isMobile ? '1.25rem' : '1.5rem',
                marginBottom: 0,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                transition: 'all 0.3s ease'
            }}
        >
            {children}
        </div>  
    );
};

export default GlassBlock;