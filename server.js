const express = require("express");
const cors = require("cors");
require('dotenv').config({ path: "./.env" });
const SpotifyWebApi = require('spotify-web-api-node');
const _ = require('lodash');

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
  spotifyApi.getPlaylist('58NEDLN8pRY27qU4zkWuZV')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
    const artistIdsArr = [];
    data.body.tracks.items.forEach((item) => {
        item.track.artists.forEach((artist) => {
          artistIdsArr.push(artist.id);
        });
      });
      const artistIdsSet = new Set(artistIdsArr);
      return artistIds = [...artistIdsSet];
  }).then(function(artistIds) {
    spotifyApi.getArtists(artistIds)
    .then(function(data) {
      console.log('Artists information', data.body);
      let artistDetails = [];
      data.body.artists.forEach((artist) => {
        const { name,  followers, images } = artist;
        const totalFollowers = _.get(followers, 'total', 0);
        const firstImage = images[0];
        const firstImageUrl = _.get(firstImage, 'url', '');
        artistDetails.push({ name, totalFollowers, firstImageUrl });
      })
      res.json(artistDetails);
    }, function(err) {
      console.error(err);
    })
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});