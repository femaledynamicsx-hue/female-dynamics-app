"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, Shield, Target } from 'lucide-react';
import Link from 'next/link';

// SEO JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "אתגר ה-30 יום | Female Dynamics",
    "description": "תוכנית הליווי האקסקלוסיבית לגברים המעוניינים לשפר את הדינמיקה הנשית, הביטחון העצמי ואחוזי ההצלחה בדייטינג תוך 30 יום בלבד.",
    "brand": {
        "@type": "Brand",
        "name": "Dolev Hadad"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": "Men"
    }
};

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-5xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors mb-12 font-medium">
                    <ArrowLeft className="w-5 h-5 ml-2" />
                    חזרה לעמוד הבית
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 space-x-reverse border border-emerald-400/40 bg-emerald-400/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-8">
                        <Zap className="w-4 h-4 fill-emerald-400/50" />
                        <span>שינוי רדיקלי בזמן שיא</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6">
                        אתגר <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">ה-30 יום</span>
                    </h1>
                    <p className="text-xl text-charcoal-300 max-w-2xl mx-auto leading-relaxed">
                        תוכנית ההדגל האקסקלוסיבית שלנו. חודש אינטנסיבי שיהפוך אותך מבחור ש"מנסה לשרוד" באפליקציות לגבר ה-1% שנשים מחפשות.
                    </p>
                </motion.div>

                <div className="bg-charcoal-900 border border-charcoal-800 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl rounded-full pointer-events-none"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">מה זה כולל?</h2>
                            <ul className="space-y-6">
                                {[
                                    "אבחון פרופיל טינדר/אוקייקיופיד 360°",
                                    "פיצוח חסימות פסיכולוגיות בגישה לנשים",
                                    "בניית סט תמונות מנצח שמייצר מאצ'ים איכותיים",
                                    "אימוני פנים-אל-פנים לשיפור שפת גוף וטון דיבור",
                                    "יצירת 'הילה של מסתורין' וביטחון מושך",
                                    "ליווי אישי יומיומי בוואטסאפ לזמן אמת"
                                ].map((item, idx) => (
                                    <motion.li key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-charcoal-300 text-lg">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-12">
                                <button className="w-full md:w-auto bg-gradient-to-r from-emerald-500 to-emerald-400 text-charcoal-950 px-10 py-5 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition-all">
                                    אני רוצה לשמוע פרטים
                                </button>
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="bg-charcoal-950 border border-charcoal-800 p-8 rounded-2xl">
                                <Shield className="w-10 h-10 text-emerald-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">אחריות תוצאות</h3>
                                <p className="text-charcoal-400">אם עשית את המשימות ולא ראית שיפור משמעותי במאצ'ים ובדייטים - אנחנו מחזירים לך את הכסף.</p>
                            </div>
                            <div className="bg-charcoal-950 border border-charcoal-800 p-8 rounded-2xl">
                                <Target className="w-10 h-10 text-emerald-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">סינון קפדני</h3>
                                <p className="text-charcoal-400">התוכנית לא מתאימה לכל אחד. אנחנו דורשים רצינות, השקעה ונכונות לצאת מאזור הנוחות.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
