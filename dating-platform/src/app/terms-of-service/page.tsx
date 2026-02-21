import { motion } from 'framer-motion';
import { ArrowLeft, Scale } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <div className="max-w-4xl mx-auto px-6">

                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group mb-12">
                    <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </Link>

                <div className="mb-16">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-900 border border-charcoal-800 mb-6">
                        <Scale className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">תנאי שימוש</h1>
                    <p className="text-xl text-charcoal-300">הסכם ההתקשרות בינינו. אנא קראו בהקפדה.</p>
                </div>

                <div className="prose prose-invert prose-emerald max-w-none text-charcoal-300">
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. כללי</h2>
                    <p>
                        ברוכים הבאים לאתר Female Dynamics ("האתר"). השימוש באתר זה, בתכנים המוצגים בו ובשירותים המוצעים דרכו כפוף לתנאי השימוש המפורטים להלן.
                        גלישה באתר ו/או שימוש בשירותיו מהווים את הסכמתך לתנאים אלו במלואם.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. רכישת שירותים ומוצרים</h2>
                    <p>
                        רכישת קורסים, תוכניות ייעוץ, או כל מוצר אחר דרך האתר כפופה למלאי הקיים ולאישור ההזמנה. הנהלת האתר שומרת לעצמה את הזכות לסרב להזמנה מכל סיבה שהיא, או להגביל את כמויות הרכישה.
                    </p>
                    <ul className="list-disc pr-6 space-y-2 mb-6">
                        <li>המחירים המוצגים באתר הם בשקלים חדשים (ש"ח) וכוללים מע"מ כחוק, אלא אם צוין אחרת במפורש.</li>
                        <li>התשלום יתבצע באופן מאובטח באמצעות כרטיס אשראי או אמצעי תשלום אחרים המאושרים באתר.</li>
                        <li>מדיניות ביטולים והחזרים תיקבע בהתאם לחוק הגנת הצרכן ולתנאים הספציפיים המפורטים בכל עמוד מוצר או שירות.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. קניין רוחני</h2>
                    <p>
                        כל זכויות הקניין הרוחני באתר, לרבות תכנים, טקסטים, עיצובים, לוגואים, תמונות, קטעי וידאו וכל חומר אחר המוצג בו, שייכות בלעדית לדולב חדד ול-Female Dynamics, או לצדדים שלישיים שהעניקו לנו הרשאה להשתמש בהם.
                        אין להעתיק, לשכפל, להפיץ, לפרסם, להציג בפומבי או לבצע כל שימוש מסחרי במידע ובתכנים ללא אישור מראש ובכתב.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. הגבלת אחריות</h2>
                    <p>
                        המידע, הכלים והתוכניות המוצעים באתר נועדו לספק ערך, הכוונה ופיתוח אישי, אך אינם מהווים תחליף לייעוץ פסיכולוגי, רפואי או מקצועי אחר.
                        דולב חדד וצוות האתר אינם נושאים באחריות לכל נזק, ישיר או עקיף, שעלול להיגרם כתוצאה משימוש באתר, קבלת ההחלטות על בסיסו או אי-הצלחה בהשגת תוצאות ספציפיות בעקבות השימוש בתכניו. דייטינג מבוסס על מורכבות אנושית שלא ניתן לחזות מראש.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. שינויים בתנאי השימוש וזמינות האתר</h2>
                    <p>
                        האתר רשאי לשנות תנאים אלו מעת לעת ללא הודעה מוקדמת. אנו שומרים על הזכות לשנות, להשעות או להפסיק כל היבט של האתר או השירותים בכל עת.
                    </p>
                </div>

                <div className="mt-20 pt-8 border-t border-charcoal-800 text-charcoal-500 text-sm">
                    עודכן לאחרונה: פברואר 2026
                </div>
            </div>
        </div>
    );
}
