import React from "react";
import GlassBlock from '../GlassBlock';


const About = ({ about }) => {
    return (
        <GlassBlock delay={0.2}>
            <h2 style={{ color: '#fff', marginTop: '0', fontSize: '1.5rem', marginBottom: '1rem' }}>
                👤 О себе
            </h2>
            <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                lineHeight: '1.8',
                fontSize: '1.05rem',
                margin: '0'
            }}>
                {about}
            </p>
        </GlassBlock>
    );
};

export default About;