import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'יצירת קשר | פגישות וייעוץ VIP עם דולב חדד',
    description: 'צור קשר לתיאום פגישת ייעוץ 1-על-1, שאלות על האקדמיה, או לקבלת לווי VIP סגור.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-charcoal-950 flex flex-col items-center justify-center py-32 px-6">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">יצירת קשר & VIP</h1>
            <p className="text-xl text-charcoal-400 font-sans max-w-2xl text-center">
                טופס יצירת הקשר המאובטח יעלה לכאן בקרוב.
            </p>
        </div>
    );
}
