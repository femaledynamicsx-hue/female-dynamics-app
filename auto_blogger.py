"""
=========================================================
FEMALE DYNAMICS - ELITE AI AUTO-BLOGGING SYSTEM ($10K SEO MODULE)
=========================================================

מערכת זו נוצרה במיוחד עבור דולב חדד. היא מריצה מנוע בינה מלאכותית שמייצר תוכן אותנטי
ברמה פסיכולוגית מטורפת (מעל 1000 מילים) על פי 30 סודות האלפא של דולב, ושותלת אותם
ישירות אל תוך קובץ ה- HTML (blog.html) - מה שגורם לגוגל לזחול (Crawl) ולקדם את 
האתר בטירוף בלי שום מאמץ אנושי.

דרישות:
1. פייתון מותקן על המחשב / שרת מרוחק.
2. מפתח API של Google Gemini / OpenAI.
3. אפשר להריץ דרך Task Scheduler בכל יום!
"""

import os
import re
import datetime
import random

# TODO: כאן תשים את מפתח ה-API שלך כדי שהסקריפט ייצר מאמרים בעצמו.
AI_API_KEY = "YOUR_API_KEY_HERE"
BLOG_FILE = "blog.html"

# התמונות המדהימות שנוצרו על ידי AI לאתר
AI_IMAGES = [
    "blog_ai_1_1771607801632.png",
    "blog_ai_2_1771607823333.png",
    "blog_ai_3_1771607845915.png"
]

# פרומפט (הוראה סודית) לאינטליגנציה המלאכותית כדי שתכתוב בדיוק כמו דולב
SYSTEM_PROMPT = '''
אתה כותב התוכן של 'דולב חדד', מנטור מוביל בישראל לדינמיקה חברתית, דייטינג ופסיכולוגיה של נשים לגברים בקהילת Boss (ה-1%).
אנא כתוב מאמר בלוג ארוך, תקין תחבירית (עברית שפת אם קטלנית, ללא שגיאות), אגרסיבי, ישיר, ומלא בידע פרקטי. המאמר חייב לכלול צירופי SEO מובילים כמו "איך להתחיל עם בחורה", "פרופיל אינסטגרם", "פחד גישה", בניית ביטחון עצמי ועוד.
חלק אותו לפסקאות עם תגיות H3 (<h3>) ותגיות P (<p>). זה קריטי שזה יהיה קוד HTML עטוף.
בסוף המאמר תדחוף את הקורא להזמין 'שיחת אבחון טלפונית' דרך עמוד ה-contact.html.
'''

def generate_ai_blog_html(topic):
    """
    בסביבת אמת, פונקציה זו תתקשר לשרתי הבינה המלאכותית (OpenAI / Gemini)
    ותקבל חזרה אלפי מילים של תוכן איכותי בצורת HTML.
    לצורך הדגמה כרגע נייצר את תבנית המאמר שתתלבש אוטומטית.
    """
    print(f"[Female Dynamics AI] Generating elite SEO content for topic: {topic}...")
    
    # במידה ויש API, כאן נכנס קוד ה-Requests או ספריות ה-AI
    # response = openai.ChatCompletion.create( ... )
    
    # Mocked HTML response with high-end style
    now = datetime.datetime.now()
    month_year = now.strftime("%m/%Y")
    random_pic = random.choice(AI_IMAGES)
    
    html_chunk = f"""
            <!-- Auto Generated SEO Article: {topic} -->
            <article class="blog-post">
                <img src="{random_pic}" alt="{topic} - Female Dynamics Israel Dating Expert">
                <h2>{topic} - איך לשלוט בחוקי המשחק ב-2026</h2>
                <div class="meta">נכתב על ידי מערכת Female Dynamics (AI-Driven) | פורסם ב-{month_year} | אורך קריאה: 12 דק'</div>
                <div class="post-body">
                    <p>זה מאמר אקסקלוסיבי שנוצר אוטומטית על ידי מנוע קידום האתרים (SEO) של קהילת בוס.</p>
                    <p>אנחנו חיים בעידן שבו טינדר נמחק ואנשים מבינים שצריך חזרה את הפן האנושי והאלפא. במאמר זה אנו נכנסים לרזולוציות של פסיכולוגיית תקשורת, בניית עמודות ברזל של אישיות, ואיך להיראות בלתי מושג אך חברותי באותה העת.</p>
                    
                    <h3>הסוד המלוכלך של הסושיאל</h3>
                    <p>כיום ה-Outer Game הוא שם המשחק. נשים סורקות את הפרופיל שלך וקובעות איזה ערך אתה מחזיק בשרשרת המזון. אם אתה משדר ריצוי – הפסדת.</p>
                    <p>כאן זה המקום להרחיב ולהעמיק בהלכות חיים יוקרתיות שדולב מנחיל למתאמנים שלו בסימולציות אחד על אחד.</p>
                    <br>
                    <div style="background: rgba(212, 175, 55, 0.1); padding: 1.5rem; text-align: center; border: 1px dashed var(--primary); border-radius: 8px;">
                        <h4 style="color: white; font-size: 1.2rem; margin-bottom: 0.5rem;">מבין שאתה נשאר מאחור? קח פיקוד על חייך.</h4>
                        <a href="contact.html" style="color: var(--primary); font-weight: bold; text-decoration: underline;">השאר עכשיו פנייה ליחידת הסינון של Female Dynamics</a>
                    </div>
                </div>
            </article>
"""
    return html_chunk

def append_to_blog_html(new_article_html):
    """
    פותח את קובץ הבלוג שלנו (blog.html)
    ומחפש את ה-'div id="seo-articles-container"'.
    לאחר מכן הוא משתיל בתוכו את המאמר החדש - מה שלוקח דקות לאדם לעשות.
    """
    if not os.path.exists(BLOG_FILE):
        print(f"[Error] The file {BLOG_FILE} does not exist in the current directory.")
        return False
        
    with open(BLOG_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # נקודת ההזרקה המדויקת ששמנו בקוד של הבלוג
    injection_point = '<!-- Dynamic Blog Container (המאמרים מוזנים ישירות בקוד עבור SEO מלא ללא JS) -->\n        <div id="seo-articles-container" class="container">'
    
    if injection_point not in content:
        print("[Error] Injection point not found in blog.html. Please ensure you don't delete the container id.")
        return False
        
    # משתיל את המאמר ממש בתחילת הרשימה!
    new_content = content.replace(injection_point, injection_point + "\n" + new_article_html)
    
    with open(BLOG_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"[Success] Successfully appended the new massive SEO article to {BLOG_FILE}.")
    return True

if __name__ == "__main__":
    print("==================================================")
    print(" FEMALE DYNAMICS - 3X DAILY AUTO BLOGGER STARTED  ")
    print("==================================================")
    
    topics_pool = [
        "להיות גבר במסעדה: איך לשלם ולהוביל בסטייל",
        "איך לדבר עם 3 בנות יחד מחוץ למועדון בתל אביב",
        "למה היא סיננה אותך? 4 טעויות וואטסאפ קטלניות"
    ]
    
    # מייצר מאמר אחד אקראי לדוגמה כשמריצים את הסקריפט
    topic_to_write = random.choice(topics_pool)
    article_html = generate_ai_blog_html(topic_to_write)
    
    status = append_to_blog_html(article_html)
    if status:
        print(">> SEO Dominance level increased. The Google Spiders will love this.")
