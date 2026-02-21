const baseArticles = [
    { id: 1, title: "חרדת ביצוע בדייט ראשון: המדריך המלא לגבר", slug: "first-date-anxiety", category: "Mindset", excerpt: "איך להפסיק להזיע לפני הדייט ולשדר ביטחון אמיתי שממגנט נשים מהשנייה הראשונה." },
    { id: 2, title: "הודעת הפתיחה המושלמת באינסטגרם (שלא תשאיר אותך בסין)", slug: "instagram-opener", category: "Texting", excerpt: "תשכח מ'היי מה קורה'. השיטות המוכחות של 2026 להתחיל שיחה שמובילה לדייט." },
    { id: 3, title: "שפת גוף מנצחת: מה שהיא קוראת בלי שאתה מדבר", slug: "alpha-body-language", category: "Field Work", excerpt: "80% מהתקשורת היא לא מילולית. כך תעמוד, תסתכל ותזוז כמו גבר של 1%." },
    { id: 4, title: "המעבר מידיד למאהב: איך לצאת מה-Friendzone", slug: "escape-friendzone", category: "Mindset", excerpt: "הטעות שרוב הגברים עושים שגורמת לה לראות בך 'אח ציפייה', ואיך להפוך את הקערה." },
    { id: 5, title: "איך לבנות פרופיל באפליקציות שמביא מאצ'ים איכותיים", slug: "tinder-profile-hacks", category: "Online Dating", excerpt: "האלגוריתם השתנה. אלו התמונות והטקסטים שאתה חייב בפרופיל שלך היום." },
    { id: 6, title: "חוק ה-3 שניות: איך לגשת למישהי בבר בלי לגמגם", slug: "3-second-rule", category: "Field Work", excerpt: "הטכניקה הפסיכולוגית שתעלים את הפחד מגישה ותגרום לך לפעול על אוטומט." },
    { id: 7, title: "פסיכולוגיה של משיכה: למה טריקים זולים כבר לא עובדים", slug: "attraction-psychology", category: "Mindset", excerpt: "נשים ב-2026 מריחות פיקאפ מקילומטר. איך לייצר משיכה אותנטית ועמוקה." },
    { id: 8, title: "הטסטים שנשים עושות לך בדייט (ואיך לעבור אותם)", slug: "shit-tests-guide", category: "Psychology", excerpt: "היא לא סתם עוקצת אותך, היא בודקת את עמוד השדרה שלך. כך תגיב נכון." },
    { id: 9, title: "דייטינג אחרי פרידה: מתי נכון לחזור לשוק?", slug: "dating-after-breakup", category: "Mindset", excerpt: "המדריך להתאוששות גברית. מתי אתה באמת מוכן לצאת שוב בלי לשדר ייאוש." },
    { id: 10, title: "לאן לקחת אותה? 5 רעיונות לדייט ראשון שאינם בית קפה", slug: "first-date-ideas", category: "Field Work", excerpt: "שבור את השגרה. מקומות שיוצרים אינטימיות וחיבור מהיר הרבה יותר מישיבה מול קפה." }
];

const articlesData = [
    ...baseArticles,
    ...Array.from({ length: 90 }, (_, i) => {
        const item = baseArticles[i % baseArticles.length];
        return {
            id: i + 11,
            title: `${item.title} (העמקה ${Math.floor(i / baseArticles.length) + 1})`,
            slug: `${item.slug}-${i + 11}`,
            category: item.category,
            excerpt: item.excerpt
        };
    })
];
