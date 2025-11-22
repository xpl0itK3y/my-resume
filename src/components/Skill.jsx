import React, { useState, useEffect } from "react";
import GlassBlock from "../GlassBlock";

const Skills = ({ skillsTitle, softSkillsTitle, skills }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [hoveredSkill, setHoveredSkill] = useState(null);

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
            
            {/* Технические навыки с логотипами */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '0.85rem' : '1.2rem',
                marginBottom: '2.5rem',
                position: 'relative'
            }}>
                {skills.technical.map((skill, index) => (
                    <div 
                        key={index}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            width: isMobile ? '48px' : '56px',
                            height: isMobile ? '48px' : '56px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                            setHoveredSkill(index);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            setHoveredSkill(null);
                        }}
                    >
                        {getSkillIcon(skill.name) ? (
                            <img 
                                src={getSkillIcon(skill.name)} 
                                alt={skill.name}
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'contain'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span style="font-size: 36px">💻</span>';
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: '36px' }}>💻</span>
                        )}
                        
                        {/* Красивая подсказка */}
                        {hoveredSkill === index && (
                            <div style={{
                                position: 'absolute',
                                bottom: '-45px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95))',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                padding: '0.5rem 1rem',
                                borderRadius: '10px',
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontWeight: '500',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4), 0 0 15px rgba(102, 126, 234, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                zIndex: 1000,
                                animation: 'tooltipFadeIn 0.2s ease-out',
                                pointerEvents: 'none'
                            }}>
                                {skill.name}
                                {/* Стрелка вверх */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderLeft: '6px solid transparent',
                                    borderRight: '6px solid transparent',
                                    borderBottom: '6px solid rgba(102, 126, 234, 0.95)'
                                }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* Добавляем CSS анимацию */}
            <style>{`
                @keyframes tooltipFadeIn {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(5px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }
            `}</style>
            
            {/* Soft Skills */}
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
                    fontSize: isMobile ? '0.85rem' : '0.9rem'
                }}>
                    {skill}
                </span>
            ))}
            </div>
        </GlassBlock>
    );
    
    function getSkillIcon(skillName) {
        const name = skillName.toLowerCase().replace(/\s+/g, '').replace(/\//g, '');
        
        const iconMap = {
            'reactnext.js': 'react',
            'react/next.js': 'react',
            'react': 'react',
            'nextjs': 'nextjs',
            'next.js': 'nextjs',
            'typescript': 'typescript',
            'javascript': 'javascript',
            'vue.js': 'vuejs',
            'vuejs': 'vuejs',
            'vue': 'vuejs',
            'html5': 'html5',
            'csstailwind': 'css3',
            'css/tailwind': 'css3',
            'css': 'css3',
            'tailwind': 'tailwindcss',
            'tailwindcss': 'tailwindcss',
            'node.js': 'nodejs',
            'nodejs': 'nodejs',
            'python': 'python',
            'fastapi': 'fastapi',
            'django': 'django',
            'pandas': 'pandas',
            'php': 'php',
            'laravel': 'laravel',
            'symfony': 'symfony',
            'go': 'go',
            'aiogram': 'python',
            'telethon': 'python',
            'telegrambotapi': 'python',
            'postgresql': 'postgresql',
            'mongodb': 'mongodb',
            'redis': 'redis',
            'mysql': 'mysql',
            'docker': 'docker',
            'kubernetes': 'kubernetes',
            'git': 'git',
            'gitlab': 'gitlab',
            'nginx': 'nginx',
            'linux': 'linux',
            'jest': 'jest',
            'githubactions': 'githubactions',
            'pytest': 'pytest'
        };
        
        const iconFolder = iconMap[name] || name;
        
        const specialCases = {
            'django': ['plain', 'original', 'line'],
            'nginx': ['original', 'plain', 'line'],
            'githubactions': ['original', 'plain', 'line'],
            'jest': ['plain', 'original', 'line'],
        };
        
        const fileVariants = specialCases[iconFolder] || ['original', 'plain', 'line'];
        const baseUrl = import.meta.env.BASE_URL || '/';
        const iconPath = `${baseUrl}icons/${iconFolder}/${iconFolder}-${fileVariants[0]}.svg`;
        
        return iconPath;
    }
};

export default Skills;