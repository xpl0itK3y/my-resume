import React from 'react';
import GlassBlock from '../GlassBlock';

const Header = ({ name, title }) => {
  console.log('Header данные:', { name, title }); // Для отладки
  
  return (
        <GlassBlock delay={0}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ 
                    fontSize: '3.5rem', 
                    margin: '0 0 0.5rem 0', 
                    color: '#fff',
                    fontWeight: '800',
                    letterSpacing: '-2px'
                }}>
                    {name || 'Имя не указано'}
                </h1>
                <p style={{ 
                    fontSize: '1.5rem', 
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: '0',
                    fontWeight: '300'
                }}>
                    {title || 'Должность не указана'}
                </p>
            </div>
        </GlassBlock>
    );
};

export default Header;