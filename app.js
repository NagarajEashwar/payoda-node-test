'use strict';
require("babel-core/register");
require("babel-polyfill");
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import constants from './constants';

// Express Initialization
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Mongo Initialization
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.info('Mongoose connected successfully');
});
mongoose.connect(constants.MONGODB_URL, { useNewUrlParser: true });


// CORS Initialization
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    ('OPTIONS' === req.method) ? res.sendStatus(constants.RESPONSE.OK.STATUS) : next();
}); 

// Users
app.get('/create', require('./routes/users/create').create);
app.get('/users', require('./routes/users/list').list);
app.post('/update', require('./routes/users/update').update);

// Posts
app.get('/posts', require('./routes/posts/create').create);

app.listen(constants.PORT, () => {
    console.info(`Express started on the server ${constants.PORT}`);
});
