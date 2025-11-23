import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Основной градиентный фон */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #2348b8 50%, #3b82f6 75%, #60a5fa 100%)',
                backgroundSize: '400% 400%',
                animation: isMobile ? 'none' : 'gradientShift 20s ease infinite',
                zIndex: -4
            }} />

            {/* Слой с шумом - убираем на мобильных */}
            {!isMobile && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    opacity: 0.05,
                    zIndex: -3
                }} />
            )}

            {/* Сферы - упрощенная версия для мобильных */}
            <div style={{
                position: 'fixed',
                top: '-20%',
                left: '-20%',
                width: '200%',
                height: '200%',
                zIndex: -2
            }}>
                {/* Уменьшаем количество сфер и упрощаем эффекты на мобильных */}
                {isMobile ? (
                    // Минимальная версия для мобильных - только 2 сферы без тяжелых эффектов
                    <>
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            left: '15%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(30, 58, 138, 0.4) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '15%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />
                    </>
                ) : (
                    // Полная версия для десктопа
                    <>
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            left: '15%',
                            width: '500px',
                            height: '500px',
                            background: 'radial-gradient(circle, rgba(30, 58, 138, 0.5) 0%, rgba(29, 78, 216, 0.3) 30%, transparent 70%)',
                            borderRadius: '50%',
                            animation: 'float 25s ease-in-out infinite',
                            filter: 'blur(60px)',
                            boxShadow: '0 0 100px rgba(59, 130, 246, 0.4)'
                        }} />

                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10%',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(59, 130, 246, 0.3) 30%, transparent 70%)',
                            borderRadius: '50%',
                            animation: 'float 30s ease-in-out infinite reverse',
                            filter: 'blur(60px)',
                            boxShadow: '0 0 90px rgba(59, 130, 246, 0.35)'
                        }} />

                        <div style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '25%',
                            width: '450px',
                            height: '450px',
                            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.45) 0%, rgba(59, 130, 246, 0.3) 30%, transparent 70%)',
                            borderRadius: '50%',
                            animation: 'float 28s ease-in-out infinite',
                            filter: 'blur(60px)',
                            boxShadow: '0 0 95px rgba(96, 165, 250, 0.4)'
                        }} />
                    </>
                )}
            </div>

            {/* Сетка - упрощенная для мобильных */}
            {!isMobile && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `
                        linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
                        linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px',
                    zIndex: -1,
                    opacity: 0.35
                }} />
            )}

            {/* Частицы - только на десктопе */}
            {!isMobile && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    overflow: 'hidden'
                }}>
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: Math.random() * 3 + 2 + 'px',
                                height: Math.random() * 3 + 2 + 'px',
                                background: 'rgba(147, 197, 253, 0.7)',
                                borderRadius: '50%',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                                boxShadow: '0 0 10px rgba(147, 197, 253, 0.6)',
                                filter: 'blur(0.5px)'
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.45) 100%)',
                zIndex: -1
            }} />
        </>
    );
};

export default AnimatedBackground;