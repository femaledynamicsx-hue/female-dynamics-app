"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Effects() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Spring physics for smooth trailing cursor
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over a clickable element
            if (target.closest('a') !== null || target.closest('button') !== null) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Custom Mouse Cursor (Hidden on mobile) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'white' : 'transparent',
                    opacity: 0.8
                }}
                animate={{ transition: { type: 'spring', stiffness: 100 } }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
                style={{
                    x: mousePos.x - 4, // 1/2 of width
                    y: mousePos.y - 4,
                }}
            />

            {/* Cinematic Noise Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-[50]"
                style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
                    opacity: 0.05,
                    mixBlendMode: 'overlay'
                }}
            />
        </>
    );
}
