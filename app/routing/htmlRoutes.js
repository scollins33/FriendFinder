// Primary Requires
const express = require('express');
const path = require('path');

let htmlRouter = express.Router();

// ===========================================
//  Base URL is /
// ===========================================

// GET: /
htmlRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

// GET: /survey
htmlRouter.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});


module.exports = htmlRouter;