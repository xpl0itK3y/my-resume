import React, { useState, useEffect, useRef, useCallback } from "react";

const LiquidGlassBlock = ({ children, delay = 0 }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);
    const blockRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    // Используем useCallback и throttling для оптимизации
    const handleMouseMove = useCallback((e) => {
        if (isMobile || !blockRef.current) return;
        
        // Отменяем предыдущий requestAnimationFrame
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        // Используем requestAnimationFrame для плавности
        rafRef.current = requestAnimationFrame(() => {
            const rect = blockRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            setMousePosition({ x, y });
        });
    }, [isMobile]);

    const handleMouseEnter = useCallback(() => {
        if (!isMobile) {
            setIsHovered(true);
        }
    }, [isMobile]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setMousePosition({ x: 50, y: 50 });
    }, []);

    return (
        <div 
            ref={blockRef}
            className="liquid-glass-block"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                animation: `slideIn 0.6s ease-out ${delay}s both`,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: isMobile ? 'blur(8px)' : 'blur(10px)',
                WebkitBackdropFilter: isMobile ? 'blur(8px)' : 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: isMobile ? '16px' : '20px',
                padding: isMobile ? '1.5rem' : '2rem',
                marginBottom: isMobile ? '1.5rem' : '2rem',
                boxShadow: isMobile 
                    ? '0 4px 16px 0 rgba(31, 38, 135, 0.25)' 
                    : '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
                willChange: isMobile ? 'auto' : 'transform',
            }}
        >
            {/* Жидкие эффекты только на десктопе */}
            {!isMobile && (
                <>
                    {/* Жидкое стеклянное свечение */}
                    <div
                        className="liquid-highlight"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, 
                                rgba(255, 255, 255, ${isHovered ? '0.15' : '0'}), 
                                transparent 50%)`,
                            pointerEvents: 'none',
                            transition: 'background 0.3s ease',
                            borderRadius: '20px',
                        }}
                    />

                    {/* Цветное жидкое отражение */}
                    <div
                        className="liquid-reflection"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `radial-gradient(circle 250px at ${mousePosition.x}% ${mousePosition.y}%, 
                                rgba(102, 126, 234, ${isHovered ? '0.2' : '0'}), 
                                rgba(118, 75, 162, ${isHovered ? '0.15' : '0'}) 40%,
                                transparent 60%)`,
                            pointerEvents: 'none',
                            transition: 'background 0.4s ease',
                            mixBlendMode: 'soft-light',
                            borderRadius: '20px',
                        }}
                    />

                    {/* Граница с эффектом жидкости */}
                    <div
                        className="liquid-border"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: '20px',
                            padding: '1px',
                            background: `linear-gradient(135deg at ${mousePosition.x}% ${mousePosition.y}%, 
                                rgba(255, 255, 255, ${isHovered ? '0.4' : '0.2'}), 
                                rgba(255, 255, 255, 0.1))`,
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                            transition: 'background 0.3s ease',
                        }}
                    />
                </>
            )}

            {/* Контент */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>  
    );
};

export default LiquidGlassBlock;