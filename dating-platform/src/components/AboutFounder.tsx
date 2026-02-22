"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// A simple CountUp hook/component tailored for our needs
const useCountUp = (end: number, duration: number = 2000, startWhenRef: React.RefObject<Element | null>) => {
    const [count, setCount] = useState(0);
    const isInView = useInView(startWhenRef, { once: true, amount: 0.1 });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);

            // easeOutExpo
            const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            setCount(Math.floor(end * easeOut));

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure we end on the exact number
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, isInView]);

    return count;
};

interface StatCardProps {
    title: string;
    endValue: number;
    prefix?: string;
    suffix?: string;
    delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, endValue, prefix = '', suffix = '', delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const count = useCountUp(endValue, 2500, ref);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal-800/80 to-charcoal-900/90 backdrop-blur-xl border border-charcoal-700/50 p-6 flex flex-col items-center justify-center text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.5)] group"
        >
            {/* Dark Metal shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <span className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-charcoal-300 mb-2">
                {prefix}{count}{suffix}
            </span>
            <span className="text-sm md:text-base font-medium text-emerald-400/90 uppercase tracking-widest">
                {title}
            </span>
        </motion.div>
    );
};


export default function AboutFounder() {
    return (
        <section className="relative py-24 md:py-32 px-6 bg-charcoal-950 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-charcoal-800/30 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-full lg:mx-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-charcoal-800/50 group">
                            {/* Placeholder Image - Update with actual founder image later */}
                            <Image
                                src="https://femaledynamics.net/wp-content/uploads/2024/06/IMG_8367-1448x2048.png"
                                alt="דולב חדד - מייסד Female Dynamics"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />

                            {/* Gradient Overlay for blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80 lg:opacity-60"></div>
                        </div>

                        {/* Floating Signature/Badge (Optional aesthetic element) */}
                        <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-charcoal-900/80 backdrop-blur-md border border-emerald-500/30 p-4 md:p-6 rounded-2xl shadow-xl">
                            <p className="font-playfair text-xl md:text-2xl italic text-emerald-400">"לייצר מציאות, לא לחכות לה"</p>
                        </div>
                    </motion.div>

                    {/* Text & Stats Column */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-3">המוח מאחורי השיטה</h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                                דולב חדד <span className="block text-charcoal-400 text-3xl md:text-4xl lg:text-5xl mt-2 font-light">מייסד Female Dynamics</span>
                            </h3>

                            <div className="space-y-4 text-charcoal-300 text-lg leading-relaxed">
                                <p>
                                    את הפלטפורמה הזו הקמתי מתוך הבנה עמוקה של הדינמיקה האמיתית בין גברים לנשים. לא עוד תיאוריות סרק או "משפטי פתיחה" שעובדים רק בסרטים, אלא פרקטיקה מוכחת שעובדת בשטח, בחיים האמיתיים.
                                </p>
                                <p>
                                    המטרה שלי היא לקחת גברים בעלי פוטנציאל, ולהפוך אותם לגרסה העוצמתית ביותר של עצמם. גברים שמובילים טרנספורמציה בכל תחום בחיים - מעסקים ועד למערכות יחסים, מתוך כריזמה, ביטחון, וערך עצמי בלתי מתפשר. אנחנו לא רק מלמדים דייטינג, אנחנו מייצרים <strong className="text-white font-black">מעמד של 1%</strong>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8">
                            <StatCard
                                title="מתאמנים בתוכנית"
                                endValue={100}
                                suffix="+"
                                delay={0.2}
                            />
                            <StatCard
                                title="שנות ניסיון"
                                endValue={5}
                                suffix="+"
                                delay={0.4}
                            />
                            <StatCard
                                title="סיפורי הצלחה"
                                endValue={250}
                                suffix="+"
                                delay={0.6}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
