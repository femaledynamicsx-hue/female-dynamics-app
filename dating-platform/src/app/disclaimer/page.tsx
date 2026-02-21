import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Disclaimer() {
    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <div className="max-w-4xl mx-auto px-6">

                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group mb-12">
                    <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </Link>

                <div className="mb-16">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-900 border border-charcoal-800 mb-6">
                        <AlertCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">הצהרת אחריות</h1>
                    <p className="text-xl text-charcoal-300">מידע חשוב שכדאי לקחת בחשבון.</p>
                </div>

                <div className="prose prose-invert prose-emerald max-w-none text-charcoal-300">
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">אין הבטחת תוצאות</h2>
                    <p>
                        כל התכנים, המאמרים, והקורסים המועברים דרך Female Dynamics מטרתם לספק ידע חיוני ולשפר את הביטחון שלכם בעולם הדייטינג והדינמיקה האנושית. עם זאת, אין אנו יכולים להבטיח תוצאה ישירה, שכן הצלחה תלויה בביצוע אישי ומשתנים סביבתיים.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">שיקול דעת אישי</h2>
                    <p>
                        העצות והרעיונות המוצגים באתר הם להעצמה וללמידה, ולא מחליפים ייעוץ פסיכולוגי קליני כאשר נדרש. האחריות על ביצוע, הפעולות בשטח, ובחירת מערכות יחסים, חלה במלואה על המשתמש.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">סיכוני גלישה</h2>
                    <p>
                        אנחנו עושים מאמץ לשמור את האתר בטוח ונקי אך איננו אחראים לנזק טכנולוגי שיגרם כתוצאה מגורמים חיצוניים שיצאו משליטתנו בעת הגישה למערכות ולשרתים שלנו.
                    </p>
                </div>

                <div className="mt-20 pt-8 border-t border-charcoal-800 text-charcoal-500 text-sm">
                    עודכן לאחרונה: פברואר 2026
                </div>
            </div>
        </div>
    );
}
