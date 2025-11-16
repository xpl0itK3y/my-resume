import React from 'react';

const AnimatedBackground = () => {
    return (
        <>
            {/* Анимированный градиентный фон */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 15s ease infinite',
                zIndex: -3
            }} />

            {/* Плавающие круги */}
            <div style={{
                position: 'fixed',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                zIndex: -2
            }}>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 20s ease-in-out infinite',
                    filter: 'blur(60px)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(118, 75, 162, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 25s ease-in-out infinite reverse',
                    filter: 'blur(60px)'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '30%',
                    width: '450px',
                    height: '450px',
                    background: 'radial-gradient(circle, rgba(35, 166, 213, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 30s ease-in-out infinite',
                    filter: 'blur(60px)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '30%',
                    width: '350px',
                    height: '350px',
                    background: 'radial-gradient(circle, rgba(35, 213, 171, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 22s ease-in-out infinite reverse',
                    filter: 'blur(60px)'
                }} />
            </div>

            {/* Вращающиеся кольца */}
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: '800px',
                height: '800px',
                marginLeft: '-400px',
                marginTop: '-400px',
                zIndex: -1,
                opacity: 0.1
            }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    animation: 'rotate 60s linear infinite'
                }} />
                <div style={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    top: '10%',
                    left: '10%',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    animation: 'rotate 40s linear infinite reverse'
                }} />
                <div style={{
                    position: 'absolute',
                    width: '60%',
                    height: '60%',
                    top: '20%',
                    left: '20%',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    animation: 'rotate 30s linear infinite'
                }} />
            </div>
        </>
    );
};

export default AnimatedBackground;