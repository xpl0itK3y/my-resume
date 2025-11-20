import React from 'react';

const AnimatedBackground = () => {
    return (
        <>
            {/* Основной градиентный фон - на 5% светлее */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #2348b8 50%, #3b82f6 75%, #60a5fa 100%)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 20s ease infinite',
                zIndex: -4
            }} />

            {/* Слой с шумом для текстуры */}
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

            {/* Большие светящиеся сферы - усиленное свечение */}
            <div style={{
                position: 'fixed',
                top: '-20%',
                left: '-20%',
                width: '200%',
                height: '200%',
                zIndex: -2
            }}>
                {/* Сфера 1 - с усиленным свечением */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '15%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(30, 58, 138, 0.65) 0%, rgba(29, 78, 216, 0.45) 30%, rgba(37, 99, 235, 0.25) 50%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 25s ease-in-out infinite',
                    filter: 'blur(80px)',
                    boxShadow: '0 0 120px rgba(59, 130, 246, 0.5), 0 0 200px rgba(96, 165, 250, 0.3)'
                }} />

                {/* Сфера 2 */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.55) 0%, rgba(59, 130, 246, 0.38) 30%, rgba(96, 165, 250, 0.2) 50%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 30s ease-in-out infinite reverse',
                    filter: 'blur(80px)',
                    boxShadow: '0 0 100px rgba(59, 130, 246, 0.45), 0 0 180px rgba(96, 165, 250, 0.25)'
                }} />

                {/* Сфера 3 */}
                <div style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '25%',
                    width: '550px',
                    height: '550px',
                    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.55) 0%, rgba(59, 130, 246, 0.38) 30%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 28s ease-in-out infinite',
                    filter: 'blur(80px)',
                    boxShadow: '0 0 110px rgba(96, 165, 250, 0.5), 0 0 190px rgba(147, 197, 253, 0.3)'
                }} />

                {/* Сфера 4 */}
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '30%',
                    width: '450px',
                    height: '450px',
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(14, 165, 233, 0.28) 30%, rgba(34, 211, 238, 0.15) 50%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 23s ease-in-out infinite reverse',
                    filter: 'blur(80px)',
                    boxShadow: '0 0 95px rgba(56, 189, 248, 0.4), 0 0 170px rgba(34, 211, 238, 0.25)'
                }} />

                {/* Сфера 5 */}
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '20%',
                    width: '480px',
                    height: '480px',
                    background: 'radial-gradient(circle, rgba(79, 70, 229, 0.45) 0%, rgba(99, 102, 241, 0.28) 30%, rgba(129, 140, 248, 0.15) 50%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 26s ease-in-out infinite',
                    filter: 'blur(80px)',
                    boxShadow: '0 0 105px rgba(79, 70, 229, 0.45), 0 0 185px rgba(129, 140, 248, 0.28)'
                }} />

                {/* Сфера 6 */}
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    left: '40%',
                    width: '420px',
                    height: '420px',
                    background: 'radial-gradient(circle, rgba(30, 64, 175, 0.55) 0%, rgba(37, 99, 235, 0.38) 30%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 24s ease-in-out infinite',
                    filter: 'blur(80px)',
                    boxShadow: '0 0 100px rgba(37, 99, 235, 0.45), 0 0 175px rgba(59, 130, 246, 0.3)'
                }} />
            </div>

            {/* Светящиеся линии/сетка */}
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

            {/* Светящиеся частицы - усиленное свечение */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden'
            }}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            background: 'rgba(147, 197, 253, 0.85)',
                            borderRadius: '50%',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                            boxShadow: '0 0 15px rgba(147, 197, 253, 0.8), 0 0 25px rgba(96, 165, 250, 0.5), 0 0 35px rgba(59, 130, 246, 0.3)',
                            filter: 'blur(0.5px)'
                        }}
                    />
                ))}
            </div>

            {/* Overlay для контраста */}
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
