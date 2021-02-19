const https = require('https');
const app = require('./app');
const path = require('path');
const fs = require('fs'); 
const port = process.env.PORT || 3000;
const server  = https.createServer({
    key : fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert : fs.readFileSync(path.join(__dirname,'cert','cert.pem'))
},
 app);
server.listen(port);
console.log("Server is running")