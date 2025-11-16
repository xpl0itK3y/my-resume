import React from "react";
import GlassBlock from "../GlassBlock";

const Contacts = ({ contacts }) => {
    return (
        <GlassBlock delay={0.1}>
            <h2 style={{ color: '#fff', marginTop: '0', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                📬 Контакты
            </h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem'
            }}>
                <div>📧 {contacts.email}</div>
                <div>📱 {contacts.phone}</div>
                <div>📍 {contacts.location}</div>
                <div>💻 {contacts.github}</div>
                <div>✈️ {contacts.telegram}</div>
            </div>
        </GlassBlock>
    );
}; 

export default Contacts;