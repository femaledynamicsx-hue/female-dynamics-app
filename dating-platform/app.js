document.addEventListener("DOMContentLoaded", () => {

    // Grab the specific element requested
    const gridContainer = document.getElementById("blog-grid");

    // Loop through the exported 'articlesData' array from data.js
    articlesData.forEach((article, index) => {
        // Create staggered animations: 100ms, 200ms, 300ms waves
        const delay = ((index % 3) + 1) * 100;

        const card = document.createElement("article");
        // AOS Fade-Up injected strictly
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", delay);

        // Exact Tailwind Classes copied from your React project specification
        card.className = "bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer group flex flex-col transition-all hover:border-emerald-500 hover:-translate-y-2 hover:shadow-2xl";

        card.innerHTML = `
            <div class="h-48 bg-zinc-950 flex flex-col items-center justify-center p-6 text-zinc-600 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent z-0"></div>
                <span class="text-6xl opacity-10 font-serif absolute bottom-[-10px] right-4 z-0">${article.id}</span>
                <span class="relative z-10 text-lg uppercase font-bold tracking-widest text-zinc-500">[${article.slug}]</span>
            </div>
            
            <div class="p-8 flex-grow flex flex-col">
                <div class="text-xs text-emerald-400 font-bold mb-3 uppercase tracking-wider">${article.category}</div>
                <h3 class="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-snug">${article.title}</h3>
                <p class="text-zinc-400 text-sm leading-relaxed">${article.excerpt}</p>
            </div>
        `;

        gridContainer.appendChild(card);
    });

    // Initialize AOS after DOM elements finish generating
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });
});
