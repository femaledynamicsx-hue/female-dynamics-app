import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Effects from '@/components/Effects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: 'Female Dynamics | דולב חדד - המדריך המוביל לדינמיקה נשית ודייטינג מנצח',
    description: 'האקדמיה המובילה בישראל לדינמיקה נשית, שפת גוף וביטחון עצמי. גלה איך להפוך לגבר של 1% עם דולב חדד. קורסים, סדנאות וייעוץ פרימיום לגברים.',
    openGraph: {
        title: 'Female Dynamics | דולב חדד',
        description: 'האקדמיה המובילה בישראל לדינמיקה נשית. הפוך לגבר שמוביל.',
        url: 'https://dolevhadad.co.il',
        siteName: 'Female Dynamics',
        locale: 'he_IL',
        type: 'website',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="he" dir="rtl">
            <body className={`${inter.variable} ${playfair.variable} font-sans overflow-x-hidden w-full bg-charcoal-950 text-charcoal-50`}>
                <Effects />
                <Header />
                <main className="pt-20"> {/* Add padding for fixed header */}
                    {children}
                </main>
                <FloatingWhatsApp />
                <Footer />
            </body>
        </html>
    );
}
