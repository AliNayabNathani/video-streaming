const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const guards = require('express-jwt-permissions')();
const { handleAuth } = require('@auth0/nextjs-auth0');
const port = process.env.PORT || 8080;

const jwtCheck = auth({
    audience: 'https://www.VideeO.com',
    issuerBaseURL: 'https://dev-g47ngs10wcqmnpfs.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/Client/Dashboard', guards.check(['get:user']), function (req, res) {
    res.json({
        user: 'This is User',
        pass: 'This is Password',
    })
});

app.listen(port);

console.log('Running on port ', port);