import React, { useState, useEffect } from "react";
import GlassBlock from "../GlassBlock";
import Skill from '../Skill';

const Skills = ({ skillsTitle, softSkillsTitle, skills }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlassBlock delay={0.4}>
            <h2 style={{ 
                color: '#fff', 
                marginTop: '0', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '1.5rem' 
            }}>
                {skillsTitle}
            </h2>
            {skills.technical.map((skill, index) => (
                <Skill key={index} name={skill.name} level={skill.level} />
            ))}
            
            <h3 style={{ 
                color: '#fff', 
                marginTop: '2rem', 
                marginBottom: '1rem', 
                fontSize: isMobile ? '1.1rem' : '1.2rem'
            }}>
                {softSkillsTitle}
            </h3>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem'
            }}>
            {skills.soft.map((skill, index) => (
                <span key={index} style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                    borderRadius: '20px',
                    color: '#fff',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
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