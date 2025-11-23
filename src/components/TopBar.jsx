import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const TopBar = ({ currentLang, onLanguageChange, translations }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrollDifference = currentScrollY - lastScrollY;
                    
                    const headerHeight = isMobile ? 220 : 300;
                    const scrollThreshold = 5;
                    
                    if (currentScrollY <= headerHeight) {
                        setIsVisible(true);
                    }
                    else if (scrollDifference > scrollThreshold && currentScrollY > headerHeight) {
                        setIsVisible(false);
                    }
                    else if (scrollDifference < -scrollThreshold && currentScrollY <= headerHeight) {
                        setIsVisible(true);
                    }
                    
                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [lastScrollY, isMobile]);
        

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'slideDownTop 0.6s ease-out',
            willChange: 'transform',
        }}>
            <div style={{
                padding: isMobile ? '1rem 1rem' : '1.25rem 2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderTop: 'none',
                borderRadius: '0 0 20px 20px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                transition: 'all 0.3s ease',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Логотип/название слева */}
                    <div style={{
                        fontSize: isMobile ? '1.4rem' : '2rem',
                        fontWeight: '700',
                        letterSpacing: '-0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '0.35rem' : '0.5rem'
                    }}>
                        <span style={{
                            fontSize: isMobile ? '2.2rem' : '2.5rem',
                            background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}></span>
                        <span style={{
                            color: '#ffffff',
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>{translations.portfolio}</span>
                    </div>

                    {/* Переключатель языка справа */}
                    <LanguageSwitcher 
                        currentLang={currentLang} 
                        onLanguageChange={onLanguageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;