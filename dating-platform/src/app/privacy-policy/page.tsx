import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <div className="max-w-4xl mx-auto px-6">

                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group mb-12">
                    <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </Link>

                <div className="mb-16">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-900 border border-charcoal-800 mb-6">
                        <ShieldCheck className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">מדיניות פרטיות</h1>
                    <p className="text-xl text-charcoal-300">הפרטיות שלך חשובה לנו בדיוק כמו ההצלחה שלך.</p>
                </div>

                <div className="prose prose-invert prose-emerald max-w-none text-charcoal-300">
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. מידע שאנחנו אוספים</h2>
                    <p>
                        אנו אוספים מידע שאתה מספק לנו ישירות, כגון בעת הרשמה לניוזלטר, יצירת חשבון, מילוי טופס יצירת קשר או רישום לאקדמיה שלנו.
                        המידע עשוי לכלול את שמך, כתובת הדוא"ל שלך, מספר הטלפון וכל מידע אחר שתבחר לספק.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. שימוש במידע</h2>
                    <p>
                        אנו משתמשים במידע שאנו אוספים כדי:
                    </p>
                    <ul className="list-disc pr-6 space-y-2 mb-6">
                        <li>לספק, לתחזק ולשפר את השירותים שלנו.</li>
                        <li>לשלוח לך מידע טכני, עדכונים, התראות אבטחה והודעות ניהוליות.</li>
                        <li>להגיב להארות, שאלות ובקשות של שירות לקוחות.</li>
                        <li>לתקשר איתך על מוצרים, שירותים, הצעות ואירועים (תוכל לבטל את ההרשמה בכל עת).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. אבטחת מידע</h2>
                    <p>
                        אנו נוקטים באמצעים סבירים כדי להגן על המידע שלך מפני אובדן, גניבה, שימוש לרעה, גישה בלתי מורשית, חשיפה, שינוי או השמדה.
                        עם זאת, שום מערכת אינה מאובטחת ב-100%, ולכן איננו יכולים להבטיח את אבטחת המידע המוחלטת שלו.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. שינויים במדיניות הפרטיות</h2>
                    <p>
                        אנו עשויים לעדכן מדיניות זו מעת לעת. אם נבצע שינויים משמעותיים, נודיע לך על ידי פרסום המדיניות המעודכנת באתר ועדכון התאריך בתחתית עמוד זה.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. יצירת קשר</h2>
                    <p>
                        אם יש לך שאלות או בקשות לגבי מדיניות הפרטיות שלנו, הרגש חופשי לפנות אלינו דרך עמוד יצירת הקשר באתר.
                    </p>
                </div>

                <div className="mt-20 pt-8 border-t border-charcoal-800 text-charcoal-500 text-sm">
                    עודכן לאחרונה: פברואר 2026
                </div>
            </div>
        </div>
    );
}
