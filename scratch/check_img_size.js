const fs = require('fs');
const path = require('path');

function getPNGSize(filePath) {
    const buffer = fs.readFileSync(filePath);
    const width = buffer.readInt32BE(16);
    const height = buffer.readInt32BE(20);
    return { width, height };
}

const imgPath = path.join(__dirname, 'game', 'assets', 'rooms', 'environment-preview.png');
try {
    const size = getPNGSize(imgPath);
    console.log(`Image Size: ${size.width}x${size.height}`);
} catch (e) {
    console.error(e);
}
