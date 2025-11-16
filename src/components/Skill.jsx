import React from "react";

const Skill = ({ name, level }) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.5rem',
                fontSize: '0.95rem'
            }}>
                <span style={{ color: '#fff', fontWeight: '500' }}>{name}</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{level}%</span>
            </div>
            <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden'
            }}>
                <div style={{
                width: `${level}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '10px',
                transition: 'width 1s ease-out',
                boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
                }} />
            </div>
        </div>

    );
};

export default Skill;