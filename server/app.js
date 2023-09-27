const express = require('express');
const { auth } = require('express-openid-connect');
const app = express();
const axios = require("axios");
var request = require("request");
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: '6bc0e3e90c3c314fcd5d6431169da1eaee26db5bd34d97a192a298fba6c8e4d0',
    baseURL: 'http://localhost:3000/Client/',
    clientID: 'adb38ErO5bDrRS3ICJsRDrYBtUxOpOlX',
    issuerBaseURL: 'https://dev-g47ngs10wcqmnpfs.us.auth0.com'
};
const cors = require('cors');
app.use(cors());
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));



var options = {
    method: 'POST',
    url: 'https://dev-g47ngs10wcqmnpfs.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"IdEIwBVU2bWOWCl21JU4zQ8A4P0iN8NZ","client_secret":"66TR09WMKZuw5qCkRCFv0zjFL-xmERTvW9Ik7hGN4Zy5R8NulGVrVW0oaeOnpPs3","audience":"https://www.VideeO.com","grant_type":"client_credentials"}'
};


request(options, function (error, response, body) {
    if (error) {
        console.error('Error obtaining token:', error);
    } else {
        const tokenResponse = JSON.parse(body);
        const token = tokenResponse.access_token;

        console.log('Token:', token);

        // Now that you have the token, you can use it in your API request
        const APIoptions = {
            method: "GET",
            url: "http://localhost:8080",
            headers: { "Authorization": `Bearer ${token}` },
        };

        axios(APIoptions)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});















// const express = require("express");
// const axios = require("axios");
// const port = process.env.PORT || 3001;
// const oAuth = require("./middleware/oAuth");
// const app = express();
// const cors = require('cors');
// // ...
// app.use(cors()); // Enable CORS for all routes
// const userAPIEndpoint = "http://localhost:8080/Client/Dashboard";

// app.use(oAuth);

// app.get("/Client/Dashboard", async (req, res) => {
//     try {
//         const { access_token } = req.oauth;
//         console.log('tokens: ', access_token);
//         const response = await axios({
//             method: "GET",
//             url: userAPIEndpoint,
//             headers: { Authorization: `Bearer ${access_token}` },
//         });
//         res.json(response.data);
//         console.log("Data:", response.data);
//     } catch (error) {
//         console.log(error);
//         if (error.response.status === 401) {
//             res.status(401).json("Unauthorized to access data");
//         } else if (error.response.status === 403) {
//             res.status(403).json("Permission denied");
//         } else {
//             res.status(500).json("Whoops, something went wrong");
//         }
//     }
// });

// app.listen(port, () => console.log("Started"));