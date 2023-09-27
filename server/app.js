const express = require("express");
const axios = require("axios");
const port = process.env.PORT || 3001;
const oAuth = require("./middleware/oAuth");
const app = express();
const cors = require('cors');
// ...
app.use(cors()); // Enable CORS for all routes
const userAPIEndpoint = "http://localhost:8080/Client/Dashboard";

app.use(oAuth);

app.get("/Client/Dashboard", async (req, res) => {
    try {
        const { access_token } = req.oauth;
        console.log(access_token);
        const response = await axios({
            method: "GET",
            url: userAPIEndpoint,
            headers: { Authorization: `Bearer ${access_token}` },
        });
        res.json(response.data);
        console.log('tokens: ', access_token);
        console.log("Data:", response.data);
    } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
            res.status(401).json("Unauthorized to access data");
        } else if (error.response.status === 403) {
            res.status(403).json("Permission denied");
        } else {
            res.status(500).json("Whoops, something went wrong");
        }
    }
});

app.listen(port, () => console.log("Started"));