const https = require('https');
https.get('https://femaledynamics.net/boss/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const regex = /https:\/\/femaledynamics\.net\/wp-content\/uploads\/[^\s\"'>]+\.(?:jpg|jpeg|png)/gi;
        const matches = data.match(regex) || [];
        const unique = [...new Set(matches)];
        console.log(unique.join('\n'));
    });
});
