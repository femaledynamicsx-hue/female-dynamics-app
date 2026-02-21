import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Glossary() {
    const terms = [
        {
            term: "Alpha (אלפא)",
            definition: "מושג המשקף גבר עם נוכחות חזקה, אחריות אישית ומובילות. לא מדובר בהתנהגות דורסנית (כפי שנטען לעיתים בטעות), אלא בביטחון פנימי שאינו תלוי באישור חיצוני."
        },
        {
            term: "Beta (בטא)",
            definition: "גבר שנוטה לוותר על הרצונות שלו כדי לרצות אחרים, מונחה על ידי חיפוש אישור ופחד מעימות. בדרך כלל מתקשה להציב גבולות ברורים בתקשורת מול נשים."
        },
        {
            term: "Chalance (צ'אלאנס)",
            definition: "ההפך מנונשלנטיות. הגישה של הבעת עניין כנה, תקשורת ישירה ללא משחקי אגו, וזמינות רגשית בריאה."
        },
        {
            term: "סולם Attraction (משיכה)",
            definition: "המידה שבה אישה מרגישה משיכה פולארית (מגנטית) כלפי גבר, המורכבת משילוב של משיכה ויזואלית, סטטוס סביבתי והאנרגיה שהגבר משדר."
        },
        {
            term: "Polarity (קוטביות)",
            definition: "הכוח המגנטי שנוצר בין האנרגיה הגברית לאנרגיה הנשית באינטראקציה. ככל שהגבר יציב ומקורקע יותר בעצמו, כך מתאפשר לנסיון הנשי לבוא לידי ביטוי חופשי."
        },
        {
            term: "Frame (מסגרת)",
            definition: "האופן שבו אדם תופס, מפרש ומנהל את המציאות באינטראקציה. להחזיק 'פריים' חזק משמעו לא להיגרר לדרמה או לרגשות של הצד השני, אלא להישאר נאמן לאמת ולערכים שלך."
        },
        {
            term: "Shit Test (בדיקת גבולות)",
            definition: "מנגנון אבולוציוני שבו אישה בוחנת באופן לא מודע את הביטחון של הגבר ומוודאת שהוא באמת חזק כפי שהוא משדר, לרוב על ידי זריקת הערה עוקצנית או שאלה מאתגרת."
        },
        {
            term: "Abundance Mindset (שפע אופציות)",
            definition: "תפיסת עולם שלפיה יש שפע של אפשרויות (הן בזוגיות, בקריירה ובחיים באופן כללי). מיינדסט זה מונע היקשרות נואשת לתוצאה או לאישה ספציפית."
        }
    ];

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <div className="max-w-4xl mx-auto px-6">

                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group mb-12">
                    <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </Link>

                <div className="mb-16">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-900 border border-charcoal-800 mb-6">
                        <BookOpen className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">מילון המונחים השלם</h1>
                    <p className="text-xl text-charcoal-300">שפת הדינמיקה הנשית: כל המושגים שאתם צריכים להכיר כדי לקרוא את המפה נכון.</p>
                </div>

                <div className="grid gap-6">
                    {terms.map((item, index) => (
                        <div key={index} className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-6 md:p-8 hover:border-charcoal-700 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-3 text-emerald-400">{item.term}</h3>
                            <p className="text-charcoal-300 leading-relaxed text-lg">{item.definition}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-charcoal-400 mb-6">מוכנים ליישם את המושגים בשטח?</p>
                    <Link href="/academy" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-charcoal-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors shadow-lg hover:shadow-xl hover:shadow-emerald-400/20">
                        גלו את האקדמיה
                    </Link>
                </div>
            </div>
        </div>
    );
}
