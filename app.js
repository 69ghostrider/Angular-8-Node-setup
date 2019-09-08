const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const session = require('express-session');
var config = require('./config/config.js');
console.log(config.)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
//api file for interacting with MongoDB
const api = require('./server/routes/api');

//parsers
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/TestSetup')));

//api location
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/TestSetup/index.html'));
});

//set port
const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));