"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star } from 'lucide-react';
import Link from 'next/link';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagneticButton = ({ children, className, onClick }: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

import { useRouter } from 'next/navigation';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-charcoal-950/70 backdrop-blur-xl border-b border-charcoal-800/60 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="font-serif text-2xl font-bold tracking-wider relative z-50">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-charcoal-950 font-black text-xl group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                                FD
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl leading-none tracking-tight">Female<span className="text-emerald-400 italic">Dynamics</span></span>
                                <div className="flex items-center gap-1 mt-0.5">
                                    <span className="text-[10px] text-charcoal-400 tracking-widest uppercase">By Dolev Hadad</span>
                                    <div className="flex items-center gap-0.5 mr-2">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <nav className="hidden lg:flex items-center space-x-8 space-x-reverse text-sm font-semibold text-charcoal-300">
                        <Link href="/" className="hover:text-white transition-colors block py-2 relative group">
                            ראשי
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/academy" className="hover:text-white transition-colors block py-2 relative group">
                            האקדמיה (The 1% Course)
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/success-stories" className="hover:text-white transition-colors block py-2 relative group">
                            סיפורי הצלחה (Case Studies)
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/blog" className="hover:text-white transition-colors block py-2 relative group">
                            קוראים (Blog)
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors block py-2 relative group">
                            יצירת קשר & VIP
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                        </Link>
                    </nav>

                    <div className="hidden lg:block z-50">
                        <MagneticButton onClick={() => router.push('/academy')} className="bg-gradient-to-l from-emerald-500 to-teal-400 text-charcoal-950 px-8 py-2.5 rounded-full text-sm font-black shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] transition-shadow">
                            התחל עכשיו
                        </MagneticButton>
                    </div>

                    <button className="lg:hidden relative z-50 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </header>

            {/* Animated Sidebar/Mobile Menu (Spring Animation) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="fixed inset-0 z-40 bg-charcoal-950 flex flex-col items-center justify-center space-y-8 lg:hidden shadow-2xl border-l border-charcoal-800"
                    >
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">ראשי</Link>
                        <Link href="/academy" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">האקדמיה</Link>
                        <Link href="/success-stories" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">סיפורי הצלחה</Link>
                        <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">קוראים (Blog)</Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors">יצירת קשר</Link>
                        <button onClick={() => { setIsMobileMenuOpen(false); router.push('/academy'); }} className="bg-gradient-to-l from-emerald-500 to-teal-400 text-charcoal-950 px-10 py-4 rounded-full text-lg font-black mt-8 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                            התחל עכשיו!
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
