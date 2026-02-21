"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MessageSquare, Diamond } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <div className="max-w-4xl mx-auto px-6">

                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group mb-12">
                    <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">יצירת קשר & <span className="text-emerald-400">VIP</span></h1>
                    <p className="text-xl text-charcoal-300 font-sans max-w-2xl mx-auto">
                        תיאום פגישות ייעוץ אישיות, בירורים על האקדמיה, או קבלה לתוכנית הליווי האקסקלוסיבית של Female Dynamics.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-12 items-start">

                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-charcoal-900 border border-charcoal-800 p-8 rounded-2xl">
                            <Diamond className="w-8 h-8 text-emerald-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">ליווי VIP אישי</h3>
                            <p className="text-charcoal-400 text-sm leading-relaxed">
                                תוכנית עבודה צמודה 1-על-1 לטרנספורמציה מוחלטת בגישה, בביטחון העצמי ובתוצאות עם נשים. (מספר המקומות מוגבל בהחלט).
                            </p>
                        </div>

                        <div className="bg-charcoal-900 border border-charcoal-800 p-8 rounded-2xl">
                            <MessageSquare className="w-8 h-8 text-charcoal-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">שאלות כלליות</h3>
                            <p className="text-charcoal-400 text-sm leading-relaxed">
                                הצוות שלנו זמין לענות על כל שאלה בנוגע לקורסים הדיגיטליים, גישה לאתר, או בעיות טכניות.
                            </p>
                            <a href="mailto:support@dolevhadad.co.il" className="inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                                <Mail className="w-4 h-4 ml-2" /> support@dolevhadad.co.il
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3 bg-charcoal-900/50 border border-charcoal-800 p-8 md:p-10 rounded-2xl relative overflow-hidden backdrop-blur-sm shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center p-8 text-center min-h-[300px]"
                                >
                                    <div className="w-20 h-20 bg-emerald-400/10 rounded-full flex items-center justify-center mb-6">
                                        <Mail className="w-10 h-10 text-emerald-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3">ההודעה נשלחה</h4>
                                    <p className="text-charcoal-300">פנייתך התקבלה במערכת. הצוות יחזור אליך בהקדם האפשרי (לרוב תוך 24-48 שעות עסקים).</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal-300 mb-2">שם מלא</label>
                                            <input type="text" required className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal-300 mb-2">טלפון (רשות)</label>
                                            <input type="tel" className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" dir="ltr" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-charcoal-300 mb-2">אימייל</label>
                                        <input type="email" required className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" dir="ltr" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-charcoal-300 mb-2">נושא הפנייה</label>
                                        <select className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors appearance-none cursor-pointer">
                                            <option value="ליווי אישיVIP">התעניינות בליווי אישי VIP</option>
                                            <option value="האקדמיה">מידע על האקדמיה לקורסים</option>
                                            <option value="הרצאות">הזמנת הרצאות וסדנאות</option>
                                            <option value="תמיכה">תמיכה טכנית באתר</option>
                                            <option value="אחר">נושא אחר</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-charcoal-300 mb-2">איך אפשר לעזור?</label>
                                        <textarea required rows={4} className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none"></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-300 text-charcoal-950 font-bold text-lg py-4 rounded-lg transition-colors shadow-lg hover:shadow-emerald-400/20">
                                        שְׁלַח הודעה
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
