import React from 'react';
import GlassBlock from '../GlassBlock';

const Education = ({ education }) => {
    return (
        <GlassBlock delay={0.6}>
            <h2 style={{ color: '#fff', marginTop: '0', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            🎓 Образование
            </h2>
            {education.map((edu, index) => (
                <div key={index}>
                    <h3 style={{ color: '#fff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
                        {edu.degree}
                    </h3>
                    <div style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.95rem'
                    }}>
                        {edu.institution} • {edu.period}
                    </div>
                </div>
            ))}
        </GlassBlock>
    );
};

export default Education;