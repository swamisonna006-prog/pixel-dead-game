const fs = require('fs');
const path = require('path');

function getPNGSize(filePath) {
    const data = fs.readFileSync(filePath);
    const width = data.readInt32BE(16);
    const height = data.readInt32BE(20);
    return { width, height };
}

const filePath = path.join('d:', 'adven', 'game', 'assets', 'gameAssets', 'Free-Urban-Zombie-Sprite-Sheet-Pixel-Art-Pack', 'Zombie_1', 'Walk.png');
try {
    const size = getPNGSize(filePath);
    console.log(`Dimensions: ${size.width}x${size.height}`);
} catch (err) {
    console.error(err);
}
