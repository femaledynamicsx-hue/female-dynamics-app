"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Award, Users, Target } from 'lucide-react';
import Link from 'next/link';

// SEO JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@type": "Person",
        "name": "Dolev Hadad",
        "jobTitle": "Dating Coach & Founder of Female Dynamics",
        "description": "Premium dating and lifestyle coach helping men understand female dynamics."
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-4xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors mb-12 font-medium">
                    <ArrowLeft className="w-5 h-5 ml-2" />
                    חזרה לעמוד הבית
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6">
                        הסיפור של <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">דולב</span>
                    </h1>
                    <p className="text-xl text-charcoal-300 max-w-2xl mx-auto leading-relaxed">
                        מעל עשור של חקר פסיכולוגיה אבולוציונית, שפת גוף ודינמיקה חברתית, הכל מרוכז לשיטה אחת שעובדת.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="space-y-6 text-charcoal-300 text-lg leading-relaxed">
                        <p>
                            תמיד אומרים לנו "פשוט תהיה עצמך", אבל מה קורה כש"עצמך" לא מביא תוצאות? אחרי שנים של תסכול, החלטתי לפצח את הקוד. לא מדובר במשחקים או טריקים זולים שמלמדים ב"פיקאפ" – אלא בהבנה אמיתית של מה שנשים מחפשות ברמה התת-מודעת.
                        </p>
                        <p>
                            בניתי את Female Dynamics כדי לתת לגברים את הכלים הפרקטיים לבניית הביטחון שלהם מהיסוד, לשפר את כושר התקשורת ולהפוך לגברים מבוקשים.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-charcoal-900 border border-charcoal-800 rounded-3xl p-8 flex flex-col justify-center gap-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-center gap-4 z-10">
                            <div className="w-12 h-12 bg-charcoal-950 rounded-full flex items-center justify-center text-emerald-400 border border-charcoal-800"><Users className="w-6 h-6" /></div>
                            <div><h3 className="text-xl font-bold text-white">400+ מתאמנים</h3><p className="text-charcoal-400 text-sm">שעברו תהליכי עומק</p></div>
                        </div>
                        <div className="flex items-center gap-4 z-10">
                            <div className="w-12 h-12 bg-charcoal-950 rounded-full flex items-center justify-center text-emerald-400 border border-charcoal-800"><Target className="w-6 h-6" /></div>
                            <div><h3 className="text-xl font-bold text-white">שיטת ה-1%</h3><p className="text-charcoal-400 text-sm">פיתוח בלעדי להתפתחות אישית</p></div>
                        </div>
                        <div className="flex items-center gap-4 z-10">
                            <div className="w-12 h-12 bg-charcoal-950 rounded-full flex items-center justify-center text-emerald-400 border border-charcoal-800"><Award className="w-6 h-6" /></div>
                            <div><h3 className="text-xl font-bold text-white">10 שנות ניסיון</h3><p className="text-charcoal-400 text-sm">מדייטינג בשטח ועד לייעוץ זוגי</p></div>
                        </div>
                    </motion.div>
                </div>

                {/* The Methodology Section */}
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">השיטה שלנו <span className="text-rosegold-accent">דולב</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-charcoal-900/50 border border-charcoal-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 font-black text-2xl">01</div>
                            <h3 className="text-2xl font-bold text-white mb-4">מיינדסט מנצח</h3>
                            <p className="text-charcoal-400 leading-relaxed text-sm">
                                פירוק תפיסות מעכבות ודימוי עצמי נמוך. בניית בסיס איתן שלא ניתן לערעור – כי ביטחון מזויף תמיד מתגלה.
                            </p>
                        </div>
                        <div className="bg-charcoal-900/50 border border-charcoal-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 font-black text-2xl">02</div>
                            <h3 className="text-2xl font-bold text-white mb-4">דינמיקה חברתית</h3>
                            <p className="text-charcoal-400 leading-relaxed text-sm">
                                הבנת הפסיכולוגיה האבולוציונית שמאחורי המשיכה. למה היא מסננת? מתי לסגת? ואיך לקרוא שפת גוף באופן טבעי.
                            </p>
                        </div>
                        <div className="bg-charcoal-900/50 border border-charcoal-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 font-black text-2xl">03</div>
                            <h3 className="text-2xl font-bold text-white mb-4">עבודת שטח מדויקת</h3>
                            <p className="text-charcoal-400 leading-relaxed text-sm">
                                תרגול יומיומי בעולם האמיתי (ומשחק טקסט באפליקציות). ממילים ראשונות ועד לייצור אינטראקציה עמוקה ומרגשת.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center bg-gradient-to-t from-charcoal-900 to-charcoal-950 border border-charcoal-800 p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold text-white mb-4">מוכן לעשות את הצעד הראשון?</h2>
                    <p className="text-charcoal-400 mb-8 max-w-xl mx-auto">
                        אל תתן לעוד שנה לעבור באותה צורה. הצטרף למועדון האקסקלוסיבי שלנו והתחל את השינוי כבר היום.
                    </p>
                    <Link href="/programs">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-emerald-500 text-charcoal-950 px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-emerald-500/20 transition-all">
                            גלה את התוכניות שלי
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
