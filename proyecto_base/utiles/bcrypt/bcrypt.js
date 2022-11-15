const bcrypt = require('bcrypt');

const password = '1234segura!';

/**
 * Generar Hash
 */
bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);
});

/**
 * Comparar Hash
 * testHas => hash generado en el punto anterior
 */
const testHas = '$2b$05$q4KLdPCOWb2kBji8TaXwqefbXa6fUdpsJ3Uoheo.hsMqUHm6tNWTi';

bcrypt.compare(password, testHas, (err, res) => {
    console.log(res);
});