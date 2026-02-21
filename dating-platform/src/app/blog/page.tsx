"use client";

import { motion } from 'framer-motion';
import { Clock, ArrowLeft, Filter } from 'lucide-react';
import Link from 'next/link';

// SEO JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "מגזין Female Dynamics - מאמרים על דינמיקה נשית ודייטינג",
    "url": "https://dolevhadad.co.il/blog",
    "description": "הבלוג המוביל בישראל על בניית ביטחון, שפת גוף, ואסטרטגיות דייטינג מתקדמות לגברים."
};
import { blogPosts } from '@/data/blogs';

export default function BlogHubPage() {
    const categories = ["הכל", "פסיכולוגיה של משיכה", "אופטימיזציית פרופיל", "גישה ישירה", "שפת גוף וביטחון"];

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-7xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors mb-12 font-medium">
                    <ArrowLeft className="w-5 h-5 ml-2" />
                    חזרה לעמוד הבית
                </Link>

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6">
                            מגזין <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">הידע</span>
                        </h1>
                        <p className="text-xl text-charcoal-400 max-w-2xl">
                            מאגר הידע המקיף ביותר בישראל לדינמיקה נשית מנצחת ודייטינג גברי.
                        </p>
                    </motion.div>

                    {/* Category Filter Pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="overflow-x-auto pb-4 no-scrollbar"
                    >
                        <div className="flex space-x-3 space-x-reverse min-w-max">
                            <div className="flex items-center text-charcoal-500 ml-2">
                                <Filter className="w-4 h-4 mr-1" />
                            </div>
                            {categories.map((cat, idx) => (
                                <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/30' : 'bg-charcoal-900 text-charcoal-400 hover:bg-charcoal-800 border border-charcoal-800'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            key={index}
                            className="group relative bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(52,211,153,0.1)] transition-all duration-400 cursor-pointer"
                        >
                            <div className="h-48 w-full bg-gradient-to-br from-charcoal-800 to-charcoal-900 relative overflow-hidden flex-shrink-0">
                                <img
                                    src={post.imgUrl}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    alt={post.title}
                                />
                                <motion.div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="absolute top-4 right-4 z-20 bg-charcoal-950/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-emerald-400 border border-charcoal-700 shadow-md">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-charcoal-500 text-xs font-semibold mb-4 gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    {post.readTime}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-snug">
                                    <Link href={`/blog/${post.slug}`} className="focus:outline-none before:absolute before:inset-0">
                                        {post.title}
                                    </Link>
                                </h4>
                                <p className="text-charcoal-400 font-medium text-sm leading-relaxed mb-8 flex-grow">
                                    {post.excerpt}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
