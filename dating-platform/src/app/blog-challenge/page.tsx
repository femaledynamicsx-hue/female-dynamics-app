import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'אתגר הבלוג 30 יום | דולב חדד',
    description: '30 יום של אתגרים יומיים שמטרתם להפוך אותך לגבר אסרטיבי, חברותי, ובטוח בעצמו מול נשים.',
};

export default function BlogChallengePage() {
    return (
        <div className="min-h-screen bg-charcoal-950 flex flex-col items-center justify-center py-32 px-6">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">אתגר ה-30 יום</h1>
            <p className="text-xl text-charcoal-400 font-sans max-w-2xl text-center">
                לוח הבקרה והאתגרים היומיים יעלו לכאן בקרוב.
            </p>
        </div>
    );
}
