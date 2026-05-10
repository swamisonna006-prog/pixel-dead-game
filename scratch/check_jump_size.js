const sizeOf = require('image-size');
const path = 'd:/adven/game/assets/gameAssets/gangster-pixel-character-sprite-sheets-pack/Gangsters_2/Jump.png';
try {
    const dimensions = sizeOf(path);
    console.log('Image dimensions:', dimensions);
} catch (e) {
    console.error('Error reading image:', e);
}
