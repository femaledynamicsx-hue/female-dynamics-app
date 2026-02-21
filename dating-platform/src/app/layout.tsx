import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Effects from '@/components/Effects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: 'היכרויות מודרניות | המדריך המקיף לדייטינג בישראל 2026',
    description: 'גלה את הסודות לדייטינג מוצלח בישראל. סקירת אפליקציות, טיפים לדייט ראשון, משפטי פתיחה בטינדר וייעוץ זוגי.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="he" dir="rtl">
            <body className={`${inter.variable} ${playfair.variable} font-sans`}>
                <Effects />
                <Header />
                <main className="pt-20"> {/* Add padding for fixed header */}
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
