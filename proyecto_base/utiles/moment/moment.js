const moment = require('moment-timezone');

let ahora = moment();
console.log(ahora.tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss'));
