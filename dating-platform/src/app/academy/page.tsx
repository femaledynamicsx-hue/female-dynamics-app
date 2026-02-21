"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Star, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AcademyPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group mb-12">
                    <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </Link>

                <div className="text-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-8"
                    >
                        <Lock className="w-4 h-4 ml-2" /> השקה בקרוב
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        The <span className="text-emerald-400 italic font-serif">1%</span> Academy
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-charcoal-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        תוכנית הדגל לגברים שמוכנים להפסיק להתפשר בחיים ובזוגיות שלהם, ולבנות דינמיקה נשית מנצחת.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-charcoal-800/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">מה תקבלו באקדמיה?</h3>
                            <ul className="space-y-4">
                                {[
                                    'הבנה עמוקה של הפסיכולוגיה והמשיכה הנשית',
                                    'בניית תקשורת פולארית ונוכחות אלפא',
                                    'אופטימיזציה מלאה לפרופיל ברשתות (Tinder, IG)',
                                    'גישה לקהילת הבוגרים הסגורה של Female Dynamics'
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-start text-charcoal-300 text-lg">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 ml-3 shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-charcoal-950/50 p-8 rounded-xl border border-charcoal-800 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold text-white mb-2 text-center">הצטרפו לרשימת ההמתנה</h4>
                            <p className="text-charcoal-400 text-sm text-center mb-8">קבלו הבטחת מחיר Early Bird ועדכון ראשונים לפני כולם.</p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center p-6 text-center"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
                                    <h5 className="text-xl font-bold text-white mb-2">נרשמת בהצלחה!</h5>
                                    <p className="text-emerald-400/80">נהיה בקשר בקרוב עם פרטים מלאים.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="הכנס את כתובת הדוא״ל שלך"
                                            className="w-full bg-charcoal-900 border border-charcoal-800 rounded-lg px-4 py-3 text-white placeholder:text-charcoal-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-right"
                                            dir="rtl"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-emerald-400 hover:bg-emerald-300 text-charcoal-950 font-bold text-lg py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
                                    >
                                        שמור לי מקום באקדמיה <ChevronRight className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
