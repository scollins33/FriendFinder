// Primary Requires
const express = require('express');
let friends = require('../data/friends');

let apiRouter = express.Router();

// ===========================================
//  Base URL is /api
// ===========================================

// GET: /api/test
apiRouter.get('/test', (req, res) => {
    res.send('API TEST');
});

// GET: /api/friends
// sends friends JSON
apiRouter.get('/friends', (req, res) => {
    res.send(friends);
});

// POST: /api/friends
// receives survey results and processes them
apiRouter.post('/friends', (req, res) => {
    let submitted = req.body;
    console.log(submitted);
});


module.exports = apiRouter;