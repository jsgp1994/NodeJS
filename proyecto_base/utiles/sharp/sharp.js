const sharp = require('sharp');

sharp('js.png')
    .resize(80)
    .toFile('test.png');