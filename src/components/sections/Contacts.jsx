import React, { useState, useEffect } from "react";
import GlassBlock from "../GlassBlock";

const Contacts = ({ title, contacts }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlassBlock delay={0.1}>
            <h2 style={{ 
                color: '#fff', 
                marginTop: '0', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '1.5rem' 
            }}>
                {title}
            </h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: isMobile ? '0.9rem' : '0.95rem'
            }}>
                <div>📧 {contacts.email}</div>
                <div>📱 {contacts.phone}</div>
                <div>📍 {contacts.location}</div>
                <div style={{ wordBreak: 'break-all' }}>💻 {contacts.github}</div>
                <div>✈️ {contacts.telegram}</div>
            </div>
        </GlassBlock>
    );
}; 

export default Contacts;