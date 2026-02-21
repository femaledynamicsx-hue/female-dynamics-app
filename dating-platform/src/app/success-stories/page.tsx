"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

// SEO JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "סיפורי הצלחה - דולב חדד",
    "description": "קראו את סיפורי ההצלחה של המתאמנים באתגר ה-30 יום."
};

const testimonials = [
    { name: "רונן ס.", age: 28, text: "לפני התוכנית הייתי נמנע לחלוטין מליזום שיחות עם נשים. היום, לגשת למישהי בבר מרגיש לי טבעי לגמרי. זה לא רק דייטינג, זה ביטחון עצמי בכל תחומי החיים." },
    { name: "דניאל ק.", age: 34, text: "תמיד חשבתי שאני 'נחמד מדי'. דולב עזר לי להבין את ההבדל בין להיות אדם טוב לבין להיות גבר שמשדר עוצמה שקטה וסמכות. התוצאות באפליקציות פשוט התהפכו." },
    { name: "איתי מ.", age: 25, text: "אתגר ה-30 יום שבר לי כל פרדיגמה שהייתה לי על נשים. למדתי איך לייצר מתח מיני, אבל ממקום מכבד ובטוח. שווה כל שקל." },
    { name: "גלבוע ש.", age: 31, text: "הייתי יוצא להמון דייטים ראשונים, אבל לעיתים רחוקות היה דייט שני. דולב עלה על הטעויות הכי קטנות שלי בשפת הגוף ובכושר השיחה, ומאז הכל נראה אחרת." },
];

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-6xl mx-auto px-6">

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6">
                        סיפורי <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">הצלחה</span>
                    </h1>
                    <p className="text-xl text-charcoal-300 max-w-2xl mx-auto leading-relaxed">
                        אלפי לייקים לא מספרים את הסיפור המלא. אלו התוצאות האמיתיות בשטח – מהדיגיטל לעולם האמיתי.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-charcoal-900 border border-charcoal-800 p-10 rounded-3xl relative overflow-hidden"
                        >
                            <Quote className="absolute top-8 left-8 w-24 h-24 text-charcoal-800/30 -rotate-12" />
                            <div className="flex space-x-1 space-x-reverse mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-emerald-400" fill="currentColor" />)}
                            </div>
                            <p className="text-xl text-white font-medium leading-relaxed mb-8 relative z-10">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center justify-between border-t border-charcoal-800/50 pt-6">
                                <span className="text-emerald-400 font-bold text-lg">{testimonial.name}</span>
                                <span className="text-charcoal-500 font-mono">גיל {testimonial.age}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
