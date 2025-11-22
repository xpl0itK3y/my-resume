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
                    marginBottom: index < experience.length - 1 ? '2.5rem' : '0',
                    paddingBottom: index < experience.length - 1 ? '2.5rem' : '0',
                    borderBottom: index < experience.length - 1 ? '3px solid rgba(102, 126, 234, 0.4)' : 'none',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                }}>
                    {/* Декоративная вертикальная линия слева */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: index < experience.length - 1 ? '2.5rem' : '0',
                        width: '4px',
                        background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '2px',
                        boxShadow: '0 0 15px rgba(102, 126, 234, 0.5)'
                    }} />
                    
                    {/* Декоративная точка на линии */}
                    <div style={{
                        position: 'absolute',
                        left: '-4px',
                        top: '8px',
                        width: '12px',
                        height: '12px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 0 15px rgba(102, 126, 234, 0.8), inset 0 0 5px rgba(255, 255, 255, 0.3)'
                    }} />
                    
                    <h3 style={{ 
                        color: '#fff', 
                        margin: '0 0 0.75rem 0',
                        fontSize: isMobile ? '1.15rem' : '1.3rem',
                        fontWeight: '700',
                        textShadow: '0 2px 10px rgba(102, 126, 234, 0.3)'
                    }}>
                        {job.position}
                    </h3>
                    
                    <div style={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: isMobile ? '0.9rem' : '0.95rem',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{ 
                            fontWeight: '600',
                            color: '#fff',
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(102, 126, 234, 0.3)'
                        }}>
                            {job.company}
                        </span>
                        
                        <span style={{
                            color: 'rgba(102, 126, 234, 0.8)',
                            fontSize: '1.2rem',
                            lineHeight: '1'
                        }}>•</span>
                        
                        <span style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontStyle: 'italic'
                        }}>
                            {job.period}
                        </span>
                    </div>
                    
                    <p style={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: '1.7',
                        margin: '0',
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        paddingLeft: '0.5rem',
                        borderLeft: '2px solid rgba(102, 126, 234, 0.2)'
                    }}>
                        {job.description}
                    </p>
                </div>
            ))}
        </GlassBlock>
    );
};

export default Experience;