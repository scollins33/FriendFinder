// Primary Requires
const express = require('express');
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

// Middleware requires
const bodyParser = require('body-parser');

// create the Express App
// then assign use of middleware and routes
let app = express();
let PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// Kick off the server's listening
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});