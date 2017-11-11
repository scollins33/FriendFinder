// Primary Requires
const express = require('express');
const path = require('path');

let friends = require(path.join(__dirname, '../data/friends'));

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

    // convert the scores to integers
    let intScores = [];
    req.body.scores.forEach((each) => {
        intScores.push(parseInt(each));
    });

    // create proper JSON
    let reqJSON = {
        name: req.body.name,
        photo: req.body.photo,
        scores: intScores
    };

    // we're basically that guy from Myspace... Tom or whatever
    // set the lowest to the first in the array
    // lowest will get replaced if the comparison score of the next friend is lower
    let lowScore = 100;
    let lowFriend = friends[0];

    // loop through each user and compare to the new user
    friends.forEach((each) => {
        let thisScore = compareUsers(reqJSON.scores, each.scores);

        if (thisScore < lowScore) {
            lowScore = thisScore;
            lowFriend = each;
        }
    });

    friends.push(reqJSON);
    res.send(lowFriend);
});

// function to compare scores for users
// takes New User Score and Stores User Score
// returns integer score
function compareUsers(pNew, pStored) {
    let compScore = 0;

    for (let i = 0; i < pNew.length; i++) {
        compScore += Math.abs(pNew[i] - pStored[i]);
    }

    return compScore;
}

module.exports = apiRouter;