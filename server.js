// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');

/* Middleware */
app.use(express.json());

express.urlencoded({ extended: true })

app.use(fileUpload({ 
	limits: { fileSize: 40 * 1024 * 1024 }
}))

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./config/checkToken'));
app.use(logger('dev'));

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});

