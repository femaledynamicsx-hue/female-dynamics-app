const fs = require('fs');
const path = require('path');

const src = 'C:/Users/שונטל פרץ/Downloads/IMG_8292-547x1024.webp';
const dest = 'C:/Users/שונטל פרץ/Desktop/אתר דולב/dating-platform/public/founder-image.webp';

try {
    fs.copyFileSync(src, dest);
    console.log("Successfully copied the image!");
} catch (e) {
    console.error("Failed to copy image:", e);
}
