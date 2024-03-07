// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const favicon = require('serve-favicon')
// const logger = require('morgan');
const path = require('path');

/* Middleware */
app.use(express.json());

express.urlencoded({ extended: true })

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))
// app.use(logger('dev'));

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});

