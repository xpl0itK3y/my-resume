import React from "react";
import GlassBlock from "../GlassBlock";
import Skill from '../Skill';

const Skills = ({ skills }) => {
    return (
        <GlassBlock delay={0.4}>
            <h2 style={{ color: '#fff', marginTop: '0', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                🚀 Технические навыки
            </h2>
            {skills.technical.map((skill, index) => (
                <Skill key={index} name={skill.name} level={skill.level} />
            ))}
            
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.2rem' }}>
                💡 Soft Skills
            </h3>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem'
            }}>
            {skills.soft.map((skill, index) => (
                <span key={index} style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    {skill}
                </span>
            ))}
            </div>
        </GlassBlock>
    );
};


export default Skills;