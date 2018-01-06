'use strict';

const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');

app.use(helmet.noCache());
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/libs', express.static(path.join(__dirname, '../../node_modules')));

require('../routes/home-route')(app);

module.exports = app;