"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, User, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// Mock Data for the Post
const postData = {
    title: "Why 'Chalance' is the Viral Dating Trend Replacing Nonchalance",
    author: "Sarah Jenkins, Ph.D.",
    authorBio: "Dr. Jenkins is a relationship psychologist specializing in modern dating dynamics and digital communication.",
    date: "February 21, 2026",
    readTime: "5 min read",
    content: `
    If you’ve spent any time on TikTok or Reddit's dating communities recently, you’ve probably noticed a massive shift in how singles are approaching relationships. For years, the golden rule of dating was to act aloof. We were taught to wait hours before replying to a text, hide our true feelings, and generally project an aura of nonchalance.
    
    But in 2026, the script has flipped. Singles are utterly exhausted by the games. Enter the biggest viral dating trend of the year: Chalance.
    
    ### What Exactly is "Chalance"?
    As the linguistic opposite of "nonchalance," chalance is the radical act of actually caring—and showing it. It’s about emotional availability, intentionality, and clear communication.
  `
};

// SEO E-E-A-T Schema
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postData.title,
    "author": {
        "@type": "Person",
        "name": postData.author,
        "description": postData.authorBio,
        "url": "https://modernmatch.com/author/sarah-jenkins"
    },
    "datePublished": "2026-02-21T08:00:00+08:00",
    "timeRequired": "PT5M",
    "publisher": {
        "@type": "Organization",
        "name": "The Modern Match",
        "logo": {
            "@type": "ImageObject",
            "url": "https://modernmatch.com/logo.png"
        }
    }
};

export default function BlogPost() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans">
            {/* E-E-A-T Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Reading Progress Bar - Million Dollar Feature */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-rosegold-accent origin-left z-50 shadow-[0_0_10px_rgba(183,110,121,0.5)]"
                style={{ scaleX }}
            />

            {/* Glassmorphism Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-charcoal-950/80 backdrop-blur-xl border-b border-charcoal-800/50 pt-1.5">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center text-charcoal-400 hover:text-rosegold-accent transition-colors group text-sm font-medium tracking-wide">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Editorial
                    </Link>
                    <div className="font-serif text-xl font-bold tracking-wider">
                        MODERN<span className="text-rosegold-accent italic ml-1">MATCH</span>
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
                    <div className="flex items-center space-x-4 text-xs font-bold tracking-widest uppercase text-rosegold-accent mb-6">
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1.5" /> {postData.readTime}</span>
                        <span className="w-1 h-1 rounded-full bg-charcoal-700"></span>
                        <span>{postData.date}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-white">
                        {postData.title}
                    </h1>

                    {/* E-E-A-T Author Card */}
                    <div className="flex items-center p-4 rounded-xl bg-charcoal-900 border border-charcoal-800/50">
                        <div className="w-12 h-12 rounded-full bg-rosegold-accent/20 flex items-center justify-center text-rosegold-accent mr-4 shadow-inner">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center text-white font-serif text-lg">
                                {postData.author} <ShieldCheck className="w-4 h-4 text-rosegold-500 ml-2" />
                            </div>
                            <p className="text-charcoal-400 text-xs mt-1 pr-4">{postData.authorBio}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-80 md:h-[400px] bg-gradient-to-tr from-charcoal-900 to-charcoal-800 rounded-2xl mb-12 relative overflow-hidden flex items-center justify-center border border-charcoal-800"
                >
                    <div className="absolute inset-0 bg-rosegold-accent/5 mix-blend-overlay"></div>
                    <span className="text-charcoal-600 font-serif italic text-xl">Cinematic Editorial Image</span>
                </motion.div>

                {/* Prose */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-white prose-a:text-rosegold-accent hover:prose-a:text-rosegold-400 prose-p:text-charcoal-300 prose-p:leading-relaxed max-w-none"
                >
                    <div dangerouslySetInnerHTML={{ __html: postData.content.replace(/\n\n/g, '<br/><br/>').replace(/### (.*?)\n/g, '<h3>$1</h3>') }} />
                </motion.article>
            </main>
        </div>
    );
}
