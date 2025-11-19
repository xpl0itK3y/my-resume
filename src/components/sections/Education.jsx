import React, { useState, useEffect } from 'react';
import GlassBlock from '../GlassBlock';

const Education = ({ title, education }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlassBlock delay={0.6}>
            <h2 style={{ 
                color: '#fff', 
                marginTop: '0', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '1.5rem' 
            }}>
                {title}
            </h2>
            {education.map((edu, index) => (
                <div key={index}>
                    <h3 style={{ 
                        color: '#fff', 
                        margin: '0 0 0.5rem 0', 
                        fontSize: isMobile ? '1rem' : '1.1rem'
                    }}>
                        {edu.degree}
                    </h3>
                    <div style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: isMobile ? '0.9rem' : '0.95rem'
                    }}>
                        {edu.institution} • {edu.period}
                    </div>
                </div>
            ))}
        </GlassBlock>
    );
};

export default Education;