const express = require("express");
const router = express.Router();
const cors = require("cors");
const axios = require("axios");
require('dotenv').config({ path: "./.env" });
const SpotifyWebApi = require('spotify-web-api-node');
scopes = ['user-read-private'];

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_API_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

const app = express();

var corsOptions = {
  origin: ("http://localhost:8080")
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json 
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // Get a playlist
  spotifyApi.getPlaylist('58NEDLN8pRY27qU4zkWuZV')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
    res.json(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  }
  // Get multiple artists
  // spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  // .then(function(data) {
  //   console.log('Artists information', data.body);
  // }, function(err) {
  //   console.error(err);
  // });
);
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});