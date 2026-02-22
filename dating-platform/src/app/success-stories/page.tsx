"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

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
    const videoIds = [
        "D0h020LbxZ0", "S0iD9Eeqc60", "yeVwwZwjPK0",
        "yj4jBaL7POs", "6Eh1HnQMM6I", "7Tu0-DU3BtI", "5e2llPb2vC8"
    ];

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-6xl mx-auto px-6 space-y-32">

                {/* header & text testimonials */}
                <div>
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

                {/* Video Testimonials Showcase */}
                <div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
                            סיפורי הצלחה בווידאו
                        </h2>
                        <p className="text-xl text-charcoal-400 max-w-2xl mx-auto">
                            אל תקשיבו לנו. תקשיבו לגברים ששינו את חייהם מקצה לקצה דרך האקדמיה האקסקלוסיבית שלנו.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoIds.map((videoId, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                key={index}
                                className="relative aspect-video bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden group shadow-xl"
                            >
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                                    title={`סיפור הצלחה עם גבר כמוך - וידאו מספר ${index + 1}`}
                                    aria-label={`סיפור הצלחה מבית אקדמיית Female Dynamics - וידאו מספר ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual Proof Section - Boss Community Images */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8 text-charcoal-200 pr-4 border-r-4 border-emerald-400"
                    >
                        גברים בדיוק כמוך שמצליחים עם נשים באונליין וברחוב
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_7358-scaled.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_6225-scaled.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_6213-scaled.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_3836-scaled.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_5742-scaled.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_5746-scaled.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_5708-scaled.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2024/11/IMG_6199-scaled.jpeg"
                        ].map((imgUrl, idx) => (
                            <motion.div
                                key={`image-${idx}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-charcoal-800 shadow-lg group"
                            >
                                <Image
                                    src={imgUrl}
                                    alt="Boss Community Testimonial"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* WhatsApp Testimonials Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8 text-charcoal-200 pr-4 border-r-4 border-emerald-400"
                    >
                        ביקורות אותנטיות ותוצאות מהשטח
                    </motion.h3>
                    <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x w-full">
                        {[
                            "https://femaledynamics.net/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.09.19.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.09.17.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.09.20-1.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.09.18.jpeg",
                            "https://femaledynamics.net/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-10.09.19-1-2.jpeg"
                        ].map((waImgUrl, idx) => (
                            <motion.div
                                key={`wa-${idx}`}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="snap-center shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-charcoal-900"
                            >
                                <Image
                                    src={waImgUrl}
                                    alt="WhatsApp Success Message"
                                    fill
                                    sizes="(max-width: 768px) 260px, 320px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 border-2 border-charcoal-800 rounded-3xl pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
