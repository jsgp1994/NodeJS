const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const routerApi = require('./routes');

require('dotenv').config();
app.use(bodyParser.json());
routerApi(app);

http.listen(3000, () => {
    console.log('listening on *:3000');
});
