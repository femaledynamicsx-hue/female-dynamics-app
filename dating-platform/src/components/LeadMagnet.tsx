"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadMagnet() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name.trim() || !phone.trim() || phone.length < 9) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setName('');
            setPhone('');
        }, 1500);
    };

    return (
        <section className="relative py-24 px-6 bg-charcoal-950 border-t border-charcoal-800 overflow-hidden z-20">
            {/* Subtle neon-green gradient background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-emerald-500/10 blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto bg-charcoal-900/50 backdrop-blur-xl border border-charcoal-700/50 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
                    >
                        מדריך חינמי מוגבל בזמן
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-sans font-black text-white mb-6 leading-tight"
                    >
                        קבל גישה מיידית: <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">5 הטעויות שמונעות ממך להיות גבר מוביל</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-charcoal-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        השאר תגלה למה ניסיונות קודמים לא עבדו, ואיך לשנות את הדינמיקה כבר בדייט הבא. המדריך יישלח אליך מיד לוואטסאפ.
                    </motion.p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto space-y-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="שם מלא"
                                value={name}
                                onChange={(e) => { setName(e.target.value); if (status === 'error') setStatus('idle'); }}
                                className={`w-full bg-charcoal-950/80 border ${status === 'error' && !name.trim() ? 'border-red-500' : 'border-charcoal-700'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors shadow-inner`}
                                disabled={status === 'loading' || status === 'success'}
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="מספר פלאפון (לוואטסאפ)"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value); if (status === 'error') setStatus('idle'); }}
                                className={`w-full bg-charcoal-950/80 border ${status === 'error' && (!phone.trim() || phone.length < 9) ? 'border-red-500' : 'border-charcoal-700'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors shadow-inner`}
                                disabled={status === 'loading' || status === 'success'}
                                dir="rtl" // Keep placeholder right-aligned
                            />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {status === 'error' && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-400 text-sm text-center"
                            >
                                אנא ודא שהזנת שם תקין ומספר טלפון חוקי.
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-400 text-charcoal-950 font-black py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:shadow-[0_0_50px_rgba(52,211,153,0.5)] flex items-center justify-center group disabled:opacity-80 disabled:cursor-not-allowed mt-6"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'idle' || status === 'error' ? (
                                <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-lg">
                                    שלח לי את המדריך עכשיו
                                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                                </motion.span>
                            ) : status === 'loading' ? (
                                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-charcoal-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    מעבד נתונים...
                                </motion.span>
                            ) : (
                                <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-charcoal-950 flex items-center gap-2">
                                    נשלח בהצלחה! בדוק את הוואטסאפ. ✓
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                    <p className="text-xs text-charcoal-500 text-center mt-4">
                        * פרטיך מאובטחים ולא יועברו לצד שלישי לעולם.
                    </p>
                </motion.form>
            </div>
        </section>
    );
}
