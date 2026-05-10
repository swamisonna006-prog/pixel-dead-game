const fs = require('fs');
const path = 'd:/adven/game/assets/rooms/environment-preview.png';
const stats = fs.statSync(path);
console.log('File size:', stats.size);
// For dimensions, we'd need a lib, but let's at least see if it exists
console.log('Path exists:', fs.existsSync(path));
