import React, { useState, useEffect } from 'react';
import GlassBlock from '../GlassBlock';

const Experience = ({ title, experience }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlassBlock delay={0.3}>
            <h2 style={{ 
                color: '#fff', 
                marginTop: '0', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '1.5rem' 
            }}>
                {title}
            </h2>
            {experience.map((job, index) => (
                <div key={index} style={{ 
                    marginBottom: index < experience.length - 1 ? '2rem' : '0',
                    paddingBottom: index < experience.length - 1 ? '2rem' : '0',
                    borderBottom: index < experience.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}>
                <h3 style={{ 
                    color: '#fff', 
                    margin: '0 0 0.5rem 0',
                    fontSize: isMobile ? '1.1rem' : '1.2rem'
                }}>
                    {job.position}
                </h3>
                <div style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    marginBottom: '0.5rem'
                }}>
                    {job.company} • {job.period}
                </div>
                <p style={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.6',
                    margin: '0',
                    fontSize: isMobile ? '0.95rem' : '1rem'
                }}>
                    {job.description}
                </p>
                </div>
            ))}
        </GlassBlock>
    );
};

export default Experience;