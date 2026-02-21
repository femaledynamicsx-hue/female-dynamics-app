"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, User, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);

    // Find the correct post
    const postData = blogPosts.find(post => post.slug === slug);

    // Show 404 if post doesn't exist
    if (!postData) {
        notFound();
        return null;
    }

    // SEO E-E-A-T Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": postData.title,
        "author": {
            "@type": "Person",
            "name": postData.author,
            "description": postData.authorBio,
            "url": "https://dolevhadad.co.il/"
        },
        "datePublished": "2026-02-21T08:00:00+08:00",
        "publisher": {
            "@type": "Organization",
            "name": "Female Dynamics",
            "logo": {
                "@type": "ImageObject",
                "url": "https://femaledynamics.net/wp-content/uploads/2025/01/IMG_8299.png"
            }
        }
    };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans" dir="rtl">
            {/* E-E-A-T Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-400 origin-right z-50 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                style={{ scaleX }}
            />

            {/* Glassmorphism Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-charcoal-950/80 backdrop-blur-xl border-b border-charcoal-800/50 pt-1.5">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/blog" className="flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group text-sm font-medium tracking-wide">
                        <ArrowLeft className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        חזרה למגזין
                    </Link>
                    <div className="font-serif text-xl font-bold tracking-wider text-white">
                        Female<span className="text-emerald-400 italic font-sans ml-1">Dynamics</span>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                {/* Meta Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="w-full h-64 md:h-96 relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-charcoal-800/50">
                        <img
                            src={postData.imgUrl}
                            alt={postData.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-charcoal-950/20" />
                    </div>

                    <div className="flex flex-row-reverse justify-end items-center space-x-4 space-x-reverse text-xs font-bold tracking-widest text-emerald-400 mb-6">
                        <span className="flex items-center"><Clock className="w-3 h-3 ml-1.5" /> {postData.readTime}</span>
                        <span className="w-1 h-1 rounded-full bg-charcoal-700 mx-2"></span>
                        <span>{postData.date}</span>
                        <span className="w-1 h-1 rounded-full bg-charcoal-700 mx-2"></span>
                        <span className="bg-charcoal-900 border border-charcoal-800 px-2 py-1 rounded text-charcoal-300">{postData.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-[1.2] mb-8 text-white">
                        {postData.title}
                    </h1>

                    {/* E-E-A-T Author Card */}
                    <div className="flex flex-row-reverse items-center justify-end p-4 rounded-xl bg-charcoal-900 border border-charcoal-800/50">
                        <div className="w-12 h-12 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 ml-4 shadow-inner">
                            <User className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                            <div className="flex items-center justify-end text-white font-bold text-lg">
                                <ShieldCheck className="w-4 h-4 text-emerald-500 mr-2" /> {postData.author}
                            </div>
                            <p className="text-charcoal-400 text-xs mt-1 pl-4">{postData.authorBio}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Prose */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prose prose-invert prose-emerald prose-lg max-w-none text-right prose-headings:text-white prose-p:text-charcoal-300 prose-p:leading-relaxed"
                >
                    <div dangerouslySetInnerHTML={{ __html: postData.content }} />
                </motion.article>
            </main>
        </div>
    );
}
