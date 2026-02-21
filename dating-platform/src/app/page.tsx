"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Star, PlayCircle, Calendar, MapPin, Users, Phone, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { blogPosts } from '@/data/blogs';

// SEO JSON-LD Schema - Hebrew
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dolev Hadad - Female Dynamics Authority",
    "url": "https://dolevhadad.co.il",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dolevhadad.co.il/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};


// --- Custom Magnetic Button Component ---
interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
const MagneticButton = ({ children, className, onClick }: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default function Home() {
    const router = useRouter();
    // Pagination & Category State
    const [activeCategory, setActiveCategory] = useState("הכל");
    const [visibleCount, setVisibleCount] = useState(6);

    const categories = ["הכל", "מיינדסט", "עבודת שטח", "דיגיטל וטקסט"];

    const filteredArticles = activeCategory === "הכל"
        ? blogPosts
        : blogPosts.filter(a => a.category === activeCategory);
    const { scrollYProgress } = useScroll();
    const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const sectionBgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const slideUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hover: { y: -12, scale: 1.02, transition: { duration: 0.4 } },
        tap: { scale: 0.98 }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const pageTransition = {
        initial: { opacity: 0, filter: "blur(10px)" },
        animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeInOut" } }
    };

    return (
        <motion.div
            initial="initial" animate="animate" variants={pageTransition}
            className="min-h-screen relative bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 pb-24 md:pb-0 scroll-smooth overflow-x-hidden"
            dir="rtl"
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Global Background Parallax Orbs */}
            <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/5 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-teal-500/5 blur-[100px]" />
            </motion.div>

            {/* 1% Man High-Ticket Hero Section */}
            <motion.section
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="relative pt-44 pb-20 md:pt-56 md:pb-32 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]"
            >
                <div className="absolute inset-0 z-0 bg-charcoal-950/50 pointer-events-none scale-110">
                    <motion.div
                        animate={{
                            background: [
                                "radial-gradient(ellipse at 80% 0%, rgba(183,110,121,0.15) 0%, rgba(10,10,10,0) 50%)",
                                "radial-gradient(ellipse at 20% 0%, rgba(183,110,121,0.15) 0%, rgba(10,10,10,0) 50%)",
                                "radial-gradient(ellipse at 80% 0%, rgba(183,110,121,0.15) 0%, rgba(10,10,10,0) 50%)"
                            ]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full"
                    />
                </div>

                <motion.div variants={slideUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
                    <div className="inline-flex items-center space-x-2 space-x-reverse border border-rosegold-accent/40 bg-rosegold-accent/10 text-rosegold-400 px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-8">
                        <Star className="w-4 h-4" />
                        <span>מועדון אקסקלוסיבי לגברים בלבד</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-sans font-black leading-[1.05] mb-8 text-white relative flex flex-col gap-4">
                        <span className="block">הזמן שלך להפוך</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400 block pb-2 drop-shadow-xl">
                            ל-גבר ה-1%
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-charcoal-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                        שלוט בדינמיקה הנשית, שפר את שפת הגוף שלך והפוך לגבר שמוביל בחיים, בעסקים ובזוגיות. תוכנית ההכשרה האגרסיבית של "Female Dynamics".
                    </p>

                    <MagneticButton onClick={() => router.push('/academy')} className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-charcoal-950 px-10 py-5 rounded-full text-xl font-bold shadow-[0_0_40px_rgba(52,211,153,0.3)] hover:shadow-[0_0_50px_rgba(52,211,153,0.5)] transition-shadow">
                        לחץ כאן לתחילת השינוי
                    </MagneticButton>
                </motion.div>
            </motion.section>

            {/* Video Testimonials Showcase  */}
            <motion.section
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="relative py-32 px-6 bg-charcoal-950 border-t border-charcoal-800 z-10 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div variants={slideUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
                            סיפורי הצלחה בווידאו
                        </h2>
                        <p className="text-xl text-charcoal-400 max-w-2xl mx-auto">
                            אל תקשיבו לנו. תקשיבו לגברים ששינו את חייהם מקצה לקצה דרך האקדמיה האקסקלוסיבית שלנו.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {/* 
                          YouTube Video IDs extracted from Female Dynamics Channel
                        */}
                        {["NaCb2M-Ps9o", "EaOgo3zzSrw", "aixphdgJF8o"].map((videoId, index) => (
                            <motion.div variants={cardVariants} key={index} className="relative aspect-video bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden group shadow-xl">
                                {videoId ? (
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                                        title={`סיפור הצלחה ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal-800/50 text-charcoal-400">
                                        <PlayCircle className="w-12 h-12 mb-3 opacity-50 text-emerald-500" />
                                        <span className="text-sm font-medium">כאן יופיע סרטון הצלחה {index + 1}</span>
                                        <span className="text-xs mt-1 text-charcoal-500">יש להזין מזהה יוטיוב בקוד</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Visual Proof Section - Boss Community Images */}
                    <div className="mt-24">
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
                                    <img src={imgUrl} alt="Boss Community Testimonial" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* WhatsApp Testimonials Section */}
                    <div className="mt-24">
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
                                    <img src={waImgUrl} alt="WhatsApp Success Message" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 border-2 border-charcoal-800 rounded-3xl pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
            {/* Upcoming VIP Masterclasses & Live Events Section */}
            <motion.section
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="py-24 px-6 bg-charcoal-950 relative z-10 border-t border-charcoal-800"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={slideUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6">
                            סדנאות <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">ואירועי VIP</span> הקרובים
                        </h2>
                        <p className="text-xl text-charcoal-400 max-w-2xl mx-auto">
                            ההזדמנות שלך ללמוד את סודות הדינמיקה הנשית פנים מול פנים, בסביבה אקסקלוסיבית ופרקטית.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Event Card 1 */}
                        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-charcoal-900 border border-charcoal-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors group">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold mb-4 border border-emerald-500/20">
                                        <Calendar className="w-4 h-4" /> 24 למרץ, 2026
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">מאסטר-קלאס: בניית פרופיל טינדר ממגנט</h3>
                                </div>
                                <div className="hidden sm:flex w-16 h-16 rounded-full bg-charcoal-800 border-2 border-charcoal-700 items-center justify-center text-charcoal-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                                    <Users className="w-8 h-8" />
                                </div>
                            </div>
                            <p className="text-charcoal-400 mb-6 text-sm leading-relaxed">
                                סדנה מעשית של 3 שעות בה נפרק את אלגוריתם הטינדר החדש. נצלם אותך (סטודיו במקום), נבנה לך ביו שעובד, ונלמד אותך איך להמיר מאצ'ים לדייטים. אל תישאר מאחור.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="flex items-center gap-2 text-charcoal-300 text-sm">
                                    <MapPin className="w-4 h-4 text-emerald-400" /> מתחם הבורסה, רמת גן
                                </div>
                                <div className="flex items-center gap-2 text-charcoal-300 text-sm">
                                    <Users className="w-4 h-4 text-emerald-400" /> מוגבל ל-15 משתתפים
                                </div>
                            </div>
                            <motion.button onClick={() => router.push('/academy')} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-black py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] flex items-center justify-center gap-2">
                                שריין מקום עכשיו <ArrowLeft className="w-5 h-5" />
                            </motion.button>
                        </motion.div>

                        {/* Event Card 2 */}
                        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-charcoal-900 border border-charcoal-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors group">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-charcoal-800 text-charcoal-300 px-3 py-1 rounded-full text-sm font-bold mb-4 border border-charcoal-700">
                                        <Calendar className="w-4 h-4" /> 10 לאפריל, 2026
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">בוטקאמפ עבודת שטח (Day Game)</h3>
                                </div>
                                <div className="hidden sm:flex w-16 h-16 rounded-full bg-charcoal-800 border-2 border-charcoal-700 items-center justify-center text-charcoal-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                                    <Users className="w-8 h-8" />
                                </div>
                            </div>
                            <p className="text-charcoal-400 mb-6 text-sm leading-relaxed">
                                לצאת איתי לרחוב ולראות איך זה נעשה בזמן אמת. נלמד איך להתגבר על חרדת גישה במקומות הומים, לייצר כימיה תוך שניות בודדות ולהפוך אינטראקציות רנדומליות למספרי טלפון.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="flex items-center gap-2 text-charcoal-300 text-sm">
                                    <MapPin className="w-4 h-4 text-emerald-400" /> שדרות רוטשילד, תל אביב
                                </div>
                                <div className="flex items-center gap-2 text-charcoal-300 text-sm">
                                    <Users className="w-4 h-4 text-emerald-400" /> מוגבל ל-5 משתתפים בלבד!
                                </div>
                            </div>
                            <button onClick={() => router.push('/academy')} className="w-full bg-charcoal-800 hover:bg-charcoal-700 border border-charcoal-600 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                הצטרף לרשימת ההמתנה <ArrowLeft className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Availability & Business Hours Section */}
            <motion.section
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="py-20 px-6 bg-gradient-to-b from-charcoal-900 to-charcoal-950 relative z-10 border-t border-charcoal-800"
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-sans font-black text-white mb-6">
                            זמן שווה <span className="text-emerald-400">תוצאות</span>.
                        </h2>
                        <p className="text-charcoal-400 mb-8 max-w-xl text-lg leading-relaxed">
                            הלו"ז לליווי אישי מתמלא מהר. אני מקבל ביום בלבד 2 שיחות התאמה לשירותי הפרימיום. השאר פרטים כדי לתאם שיחת ייעוץ אסטרטגית לבדוק האם אנחנו מתאימים.
                        </p>

                        <div className="flex flex-col gap-4 text-charcoal-300">
                            <div className="flex items-center gap-3 bg-charcoal-900 p-4 rounded-xl border border-charcoal-800 w-fit">
                                <Clock className="w-5 h-5 text-emerald-400" />
                                <div>
                                    <span className="block text-white font-bold text-sm">שעות פעילות קליניקה מקוונת</span>
                                    <span className="text-xs">ימים א'-ה': 09:00 - 19:00 (בתיאום מראש)</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-charcoal-900 p-4 rounded-xl border border-charcoal-800 w-fit">
                                <Phone className="w-5 h-5 text-emerald-400" />
                                <div>
                                    <span className="block text-white font-bold text-sm">מענה טלפוני ווואטסאפ משרד</span>
                                    <span className="text-xs">ימים א'-ה': 10:00 - 16:00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        {/* Decorative background glow */}
                        <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>

                        <div className="relative bg-charcoal-950/80 backdrop-blur-xl border border-charcoal-800 p-8 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">תאם שיחת התאמה (בחינם)</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="שם מלא" className="w-full bg-charcoal-900 border border-charcoal-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                                <input type="tel" placeholder="מספר פלאפון" className="w-full bg-charcoal-900 border border-charcoal-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                                <div className="relative">
                                    <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-500" />
                                    <input type="email" placeholder="כתובת אימייל" className="w-full bg-charcoal-900 border border-charcoal-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors pl-12" />
                                </div>
                                <motion.button onClick={() => router.push('/contact')} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="w-full bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-black py-4 rounded-xl transition-all mt-4">
                                    שליחת בקשה לייעוץ
                                </motion.button>
                            </form>
                            <p className="text-xs text-charcoal-500 text-center mt-4">
                                * מילוי הטופס אינו הבטחה לקבלה לליווי. הסינון שלנו קפדני.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Deep Dynamic Content Grid (Pillars & Pagination) */}
            <motion.section
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                className="py-32 px-6 bg-charcoal-900 border-t border-charcoal-800 relative z-10" id="blog-section"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={slideUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-sans font-black text-white mb-6">
                            ספריית <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">הידע המקצועי</span>
                        </h2>
                        <p className="text-xl text-charcoal-400 max-w-3xl mx-auto">
                            12 עמודי התווך של תורת הדינמיקה הנשית. סנן לפי קטגוריה או זלול הכל.
                        </p>
                    </motion.div>

                    {/* Filter Navigation */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16 relative z-30">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-emerald-500 text-charcoal-950 shadow-[0_0_20px_rgba(52,211,153,0.3)]' : 'bg-charcoal-950 text-charcoal-400 border border-charcoal-800 hover:text-white hover:border-charcoal-600'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Articles Map */}
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer} key={activeCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20"
                    >
                        {filteredArticles.slice(0, visibleCount).map((article) => (
                            <motion.article
                                variants={cardVariants}
                                whileHover="hover"
                                whileTap="tap"
                                key={article.id}
                                className="group relative bg-charcoal-950 border border-charcoal-800 rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                            >
                                {/* Background Image placeholder */}
                                <div className="h-56 w-full relative overflow-hidden flex-shrink-0 bg-charcoal-900">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                                    <img
                                        src={article.imgUrl}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        alt={article.title}
                                    />
                                    <div className="absolute top-4 right-4 bg-charcoal-950/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-emerald-400 border border-charcoal-700 shadow-md z-20">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative z-20 bg-charcoal-950">
                                    <div className="flex items-center text-charcoal-500 text-xs font-semibold mb-4 gap-2">
                                        <Clock className="w-3.5 h-3.5" />
                                        {article.readTime}
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-snug">
                                        <Link href={`/blog/${article.slug}`} className="focus:outline-none before:absolute before:inset-0">
                                            {article.title}
                                        </Link>
                                    </h4>
                                    <p className="text-charcoal-400 font-medium text-sm leading-relaxed mb-8 flex-grow">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto flex justify-between pt-6 border-t border-charcoal-800/50 text-emerald-400 font-bold">
                                        <span className="group-hover:translate-x-1 transition-transform">למדריך המלא ⟵</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Load More Pagination */}
                    {visibleCount < filteredArticles.length && (
                        <div className="mt-16 text-center relative z-30">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 6)}
                                className="bg-charcoal-950 border border-charcoal-700 hover:border-emerald-500 text-white px-10 py-4 rounded-full text-sm font-bold transition-colors inline-flex items-center gap-2 group"
                            >
                                טען מאמרים נוספים
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden group-hover:block ml-2"></div>
                            </button>
                        </div>
                    )}

                    {/* SEO Descriptions */}
                    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
                        <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-xl">
                            <p className="text-xs text-charcoal-500 leading-relaxed text-justify">
                                <strong>מיינדסט (Mindset) - אופטימיזציה לסמכות מקצועית:</strong> קטגוריית המיינדסט נועדה לבסס עקרונות של התפתחות אישית, דימוי עצמי גבוה, ופסיכולוגיה של שפע מול חרדת ביצוע.
                            </p>
                        </div>
                        <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-xl">
                            <p className="text-xs text-charcoal-500 leading-relaxed text-justify">
                                <strong>עבודת שטח (Field Work):</strong> כלים מעשיים לאיך להתחיל שיחה עם נשים במציאות, כולל ניתוח שפת גוף, עוצמת קול (Vocal Tonality).
                            </p>
                        </div>
                        <div className="bg-charcoal-950 border border-charcoal-800 p-6 rounded-xl">
                            <p className="text-xs text-charcoal-500 leading-relaxed text-justify">
                                <strong>דיגיטל ואפליקציות:</strong> טכניקות טינדר ב-2026. מיקסום אחוזי המאצ'ים באמצעות פרופילים פסיכולוגיים וניהול שיחות טקסט (Text Game).
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div >
    );
}
