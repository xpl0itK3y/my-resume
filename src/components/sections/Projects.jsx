import React from "react";
import GlassBlock from '../GlassBlock';


const Projects = ({ projects }) => {
    return (
        <GlassBlock delay={0.5}>
            <h2 style={{ color: '#fff', marginTop: '0', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            🎨 Проекты
            </h2>
            {projects.map((project, index) => (
                <div key={index} style={{ 
                    marginBottom: index < projects.length - 1 ? '1.5rem' : '0',
                    paddingBottom: index < projects.length - 1 ? '1.5rem' : '0',
                    borderBottom: index < projects.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}>
                    <h3 style={{ color: '#fff', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
                        {project.name}
                    </h3>
                    <div style={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.85rem',
                        marginBottom: '0.5rem'
                    }}>
                        {project.tech}
                    </div>
                    <p style={{ 
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.6',
                        margin: '0'
                    }}>
                        {project.description}
                    </p>
                </div>
            ))}
        </GlassBlock>
    );
};
  
  export default Projects;

