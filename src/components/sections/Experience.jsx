import React from 'react';
import GlassBlock from '../GlassBlock';

const Experience = ({ experience }) => {
    return (
        <GlassBlock delay={0.3}>
            <h2 style={{ color: '#fff', marginTop: '0', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                💼 Опыт работы
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
                    fontSize: '1.2rem'
                }}>
                    {job.position}
                </h3>
                <div style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem'
                }}>
                    {job.company} • {job.period}
                </div>
                <p style={{ 
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.6',
                    margin: '0'
                }}>
                    {job.description}
                </p>
                </div>
            ))}
        </GlassBlock>
    );
};

export default Experience;