"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-charcoal-950 border-t border-charcoal-800 pt-20 pb-10 px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-sans mb-16">

                {/* Brand & Mission */}
                <div className="md:col-span-1 border-b md:border-b-0 border-charcoal-800 pb-8 md:pb-0">
                    <div className="mb-6 inline-flex flex-col">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-charcoal-950 font-black text-xl shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                                FD
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl leading-none text-white tracking-tight font-serif font-bold">Female<span className="text-emerald-400 italic">Dynamics</span></span>
                                <span className="text-[10px] text-charcoal-400 tracking-widest uppercase mt-0.5">By Dolev Hadad</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-charcoal-400 leading-relaxed font-medium pr-2">
                        האקדמיה המובילה בישראל לדינמיקה נשית, שפת גוף ומנהיגות גברית. אנחנו מתכנתים מחדש את אחוזי ההצלחה שלך במציאות ובאפליקציות.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">ניווט מהיר</h4>
                    <ul className="space-y-4 text-sm font-medium text-charcoal-400">
                        <li><Link href="/academy" className="hover:text-emerald-400 transition-colors">האקדמיה (The 1% Course)</Link></li>
                        <li><Link href="/success-stories" className="hover:text-emerald-400 transition-colors">סיפורי הצלחה</Link></li>
                        <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">קוראים (Blog)</Link></li>
                        <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">יצירת קשר וייעוץ אישי</Link></li>
                    </ul>
                </div>

                {/* Knowledge Base */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">מאגר ידע (SEO)</h4>
                    <ul className="space-y-4 text-sm font-medium text-charcoal-400">
                        <li><Link href="/blog/category/mindset" className="hover:text-emerald-400 transition-colors">מיינדסט מנצח בדייטינג</Link></li>
                        <li><Link href="/blog/category/field-work" className="hover:text-emerald-400 transition-colors">עבודת שטח במציאות</Link></li>
                        <li><Link href="/blog/category/social-dynamics" className="hover:text-emerald-400 transition-colors">דינמיקה חברתית ואפליקציות</Link></li>
                        <li><Link href="/glossary" className="hover:text-emerald-400 transition-colors">מילון מונחי דייטינג 2026</Link></li>
                    </ul>
                </div>

                {/* Legal / Contact Addon */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">תמיכה חוקית</h4>
                    <ul className="space-y-4 text-sm font-medium text-charcoal-400">
                        <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">מדיניות פרטיות</Link></li>
                        <li><Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">תקנון האתר</Link></li>
                        <li><Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">הצהרת אחריות תוצאות</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-charcoal-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-500 font-medium font-sans">
                <p>© {new Date().getFullYear()} Dolev Hadad. כל הזכויות שמורות לאקדמיה לדינמיקה נשית.</p>
                <div className="mt-4 md:mt-0 space-x-4 space-x-reverse">
                    <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                    <span className="hover:text-white cursor-pointer transition-colors">TikTok</span>
                    <span className="hover:text-white cursor-pointer transition-colors">YouTube</span>
                </div>
            </div>
        </footer>
    );
}
