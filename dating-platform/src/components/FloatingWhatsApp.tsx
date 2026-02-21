"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Basic WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after a slight delay so it doesn't distract immediately on hard reload
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Phone number should include country code without '+' or '0'. Israel is 972.
    // Example: 054-1234567 -> 972541234567
    // Using a generic Israel number format for Dolev Hadad. Assuming 972500000000 for now.
    // WILL NEED TO BE REPLACED WITH THE ACTUAL NUMBER. (It's a placeholder if not provided).
    const phoneNumber = "972501234567"; // Placeholder - user can change this
    const message = encodeURIComponent("היי דולב, הגעתי דרך האתר. אשמח לשמוע פרטים על מסלולי הליווי שלך ולהפוך לגבר של 1%.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-[90] md:bottom-10 md:right-10 flex flex-col items-end gap-3"
                >
                    {/* Tooltip/Chat Bubble hint */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                        className="bg-charcoal-900/90 backdrop-blur-md border border-emerald-500/20 text-white text-sm font-medium py-2 px-4 rounded-2xl rounded-br-none shadow-lg whitespace-nowrap"
                    >
                        לחץ לשיחת ייעוץ בוואטסאפ מולי 👈
                    </motion.div>

                    {/* The Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 text-charcoal-950 shadow-[0_4px_30px_rgba(52,211,153,0.4)] hover:shadow-[0_4px_40px_rgba(52,211,153,0.6)] hover:-translate-y-1 transition-all duration-300"
                        aria-label="Chat with us on WhatsApp"
                    >
                        {/* Pulse Animation Rings */}
                        <div className="absolute inset-0 rounded-full border border-emerald-400 opacity-0 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        <div className="absolute inset-[-4px] rounded-full border border-emerald-500/30 opacity-0 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></div>

                        {/* Inner Glass Effect */}
                        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
                        <div className="absolute inset-[2px] rounded-full bg-white/20 blur-[1px]"></div>

                        <WhatsAppIcon className="relative z-10 w-8 h-8 filter drop-shadow-md" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
