import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'האקדמיה | קורס הדייטינג המקיף לגברים בישראל',
    description: 'The 1% Course - תוכנית הדגל לגברים שרוצים לבנות דינמיקה נשית מנצחת ולשדר ביטחון מוחלט.',
};

export default function AcademyPage() {
    return (
        <div className="min-h-screen bg-charcoal-950 flex flex-col items-center justify-center py-32 px-6">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">האקדמיה</h1>
            <p className="text-xl text-charcoal-400 font-sans max-w-2xl text-center">
                תוכן הקורס וההרשמה יעלו בקרוב. השאירו בראונד את המיינדסט שלכם והתכוננו לשינוי של 180 מעלות.
            </p>
        </div>
    );
}
