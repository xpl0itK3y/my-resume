import React, { useState, useEffect } from "react";
import GlassBlock from '../GlassBlock';

const Projects = ({ title, projects }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlassBlock delay={0.5}>
            <h2 style={{ 
                color: '#fff', 
                marginTop: '0', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '1.5rem' 
            }}>
                {title}
            </h2>
            {projects.map((project, index) => (
                <div key={index} style={{ 
                    marginBottom: index < projects.length - 1 ? '1.5rem' : '0',
                    paddingBottom: index < projects.length - 1 ? '1.5rem' : '0',
                    borderBottom: index < projects.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}>
                    <h3 style={{ 
                        color: '#fff', 
                        margin: '0 0 0.5rem 0', 
                        fontSize: isMobile ? '1rem' : '1.1rem'
                    }}>
                        {project.name}
                    </h3>
                    <div style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: isMobile ? '0.8rem' : '0.85rem',
                        marginBottom: '0.5rem'
                    }}>
                        {project.tech}
                    </div>
                    <p style={{ 
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.6',
                        margin: '0',
                        fontSize: isMobile ? '0.95rem' : '1rem'
                    }}>
                        {project.description}
                    </p>
                </div>
            ))}
        </GlassBlock>
    );
};
  
export default Projects;