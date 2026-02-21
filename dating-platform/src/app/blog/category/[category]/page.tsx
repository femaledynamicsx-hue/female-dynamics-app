import { blogPosts } from '@/data/blogs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import React from 'react';

// Define the expected params for Next.js 15
type Params = Promise<{ category: string }>;

export default function CategoryPage({ params }: { params: Params }) {
    // Next.js 15 requires awaiting dynamic route params
    const resolvedParams = React.use(params);
    const decodedCategory = decodeURIComponent(resolvedParams.category);

    const filteredPosts = blogPosts.filter(post => post.category === decodedCategory);

    return (
        <div className="min-h-screen bg-charcoal-950 text-charcoal-50 font-sans selection:bg-emerald-400 selection:text-charcoal-950 py-32" dir="rtl">
            <div className="max-w-6xl mx-auto px-6">

                <Link href="/blog" className="inline-flex items-center text-charcoal-400 hover:text-emerald-400 transition-colors group mb-12">
                    <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    <span>חזרה לכל המאמרים</span>
                </Link>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                        קטגוריה: <span className="text-emerald-400">{decodedCategory}</span>
                    </h1>
                    <p className="text-xl text-charcoal-300">
                        מצאנו {filteredPosts.length} מאמרים בקטגוריה זו.
                    </p>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <div
                                key={index}
                                className="bg-charcoal-900 border border-charcoal-800 rounded-3xl p-8 hover:border-emerald-400/30 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-400/10 transition-colors"></div>

                                <div className="flex items-center justify-between mb-6 relative z-10">
                                    <span className="inline-block px-3 py-1 bg-charcoal-800 text-charcoal-300 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center text-charcoal-500 text-sm font-mono">
                                        <Clock className="w-4 h-4 ml-1" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-snug relative z-10">
                                    <Link href={`/blog/${post.slug}`} className="focus:outline-none before:absolute before:inset-0">
                                        {post.title}
                                    </Link>
                                </h4>

                                <p className="text-charcoal-400 line-clamp-3 mb-8 relative z-10 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-charcoal-800 relative z-10">
                                    <span className="text-charcoal-300 font-medium">{post.author}</span>
                                    <span className="text-emerald-400 text-sm font-bold flex items-center group-hover:-translate-x-1 transition-transform">
                                        קרא עוד <ArrowLeft className="w-4 h-4 mr-1" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-charcoal-900 border border-charcoal-800 rounded-2xl">
                        <p className="text-xl text-charcoal-400">לא נמצאו מאמרים בקטגוריה זו.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
