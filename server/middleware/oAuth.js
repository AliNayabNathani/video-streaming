var axios = require("axios");

const tokenEndpoint = "https://dev-g47ngs10wcqmnpfs.us.auth0.com/oauth/token";

oAuth = (req, res, next) => {
    var code = req.query.code;

    if (!code) {
        res.status(401).send("Missing authorization code");
    }

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", "adb38ErO5bDrRS3ICJsRDrYBtUxOpOlX");
    params.append("client_secret", "SnXLFhGSx96StPNq80nhIwo2DsFP2saLdT6IXLx-2jw1ShoPA2UwxJGkeNFe3ukm")
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/Client/Dashboard");

    axios.post(tokenEndpoint, params)
        .then(response => {
            req.oauth = response.data;
            console.log(req.oauth);
            next();
        })
        .catch(err => {
            console.log(err);
            res.status(403).json(`Reason: ${err.message}`);
        })
}

module.exports = oAuth;