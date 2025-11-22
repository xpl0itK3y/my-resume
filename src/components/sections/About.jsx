import React, { useState, useEffect } from "react";
import GlassBlock from '../GlassBlock';

const About = ({ title, about }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlassBlock delay={0.2}>
            <h2 style={{ 
                color: '#fff', 
                marginTop: '0', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '1rem' 
            }}>
                {title}
            </h2>
            <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                lineHeight: '1.8',
                fontSize: isMobile ? '0.95rem' : '1.05rem',
                margin: '0',
                textAlign: 'justify'
            }}>
                {about}
            </p>
        </GlassBlock>
    );
};

export default About;