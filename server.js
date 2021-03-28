const express = require("express");
const cors = require("cors");
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config({ path: "./.env" });
const _ = require('lodash');

const app = express();

var corsOptions = {
  origin: ("http://localhost:8080")
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/top100", (req, res) => {
  let artistDetails = [];

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_API_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  spotifyApi.clientCredentialsGrant().then(
    function(data) {  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  ).then(function() {
    spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 0 })
      .then(function(data) {
        const artistIdsArr = [];
        data.body.items.forEach((item) => {
          item.track.artists.forEach((artist) => {
            artistIdsArr.push(artist.id);
          })
        })
        return artistIdsArr
      }).then(function(artistIds) {
        spotifyApi.getArtists(artistIds)
        .then(function(data) {
          data.body.artists.forEach((artist) => {
            const { id, name, followers, images, external_urls } = artist;
            const totalFollowers = _.get(followers, 'total', 0);
            const firstImage = images[0];
            const firstImageUrl = _.get(firstImage, 'url', '');
            const spotify = _.get(external_urls, 'spotify', '');
            artistDetails.push(
              {
                id,
                artist: name,
                spotifyFollowers: totalFollowers,
                img: firstImageUrl,
                spotify,
              }
            );
          })
          return artistDetails
        }).then(function(artistDetails2) {
          spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 40 })
            .then(function(data) {
              const artistIdsArr = [];
              data.body.items.forEach((item) => {
                item.track.artists.forEach((artist) => {
                  artistIdsArr.push(artist.id);
                })
              })
              return artistIdsArr
            }).then(function(artistIds) {
              spotifyApi.getArtists(artistIds)
              .then(function(data) {
                data.body.artists.forEach((artist) => {
                  const { id, name, followers, images, external_urls } = artist;
                  const totalFollowers = _.get(followers, 'total', 0);
                  const firstImage = images[0];
                  const firstImageUrl = _.get(firstImage, 'url', '');
                  const spotify = _.get(external_urls, 'spotify', '');
                  artistDetails2.push(
                    {
                      id,
                      artist: name,
                      spotifyFollowers: totalFollowers,
                      img: firstImageUrl,
                      spotify,
                    }
                  );
                })
                return artistDetails2
              }).then(function(artistDetails3) {
                spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 80 })
                .then(function(data) {
                  const artistIdsArr = [];
                  data.body.items.forEach((item) => {
                    item.track.artists.forEach((artist) => {
                      artistIdsArr.push(artist.id);
                    })
                  })
                  return artistIdsArr
                }).then(function(artistIds) {
                  spotifyApi.getArtists(artistIds)
                  .then(function(data) {
                    data.body.artists.forEach((artist) => {
                      const { id, name, followers, images, external_urls } = artist;
                      const totalFollowers = _.get(followers, 'total', 0);
                      const firstImage = images[0];
                      const firstImageUrl = _.get(firstImage, 'url', '');
                      const spotify = _.get(external_urls, 'spotify', '');
                      artistDetails3.push(
                        {
                          id,
                          artist: name,
                          spotifyFollowers: totalFollowers,
                          img: firstImageUrl,
                          spotify,
                        }
                      );
                    })
                    return artistDetails3
                  }).then(function(artistDetails4) {
                    spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 120 })
                    .then(function(data) {
                      const artistIdsArr = [];
                      data.body.items.forEach((item) => {
                        item.track.artists.forEach((artist) => {
                          artistIdsArr.push(artist.id);
                        })
                      })
                      return artistIdsArr
                    }).then(function(artistIds) {
                      spotifyApi.getArtists(artistIds)
                      .then(function(data) {
                        data.body.artists.forEach((artist) => {
                          const { id, name, followers, images, external_urls } = artist;
                          const totalFollowers = _.get(followers, 'total', 0);
                          const firstImage = images[0];
                          const firstImageUrl = _.get(firstImage, 'url', '');
                          const spotify = _.get(external_urls, 'spotify', '');
                          artistDetails4.push(
                            {
                              id,
                              artist: name,
                              spotifyFollowers: totalFollowers,
                              img: firstImageUrl,
                              spotify,
                            }
                          );
                        })
                        return artistDetails4
                      }).then(function(artistDetails5) {                       
                        spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 160 })
                        .then(function(data) {
                          const artistIdsArr = [];
                          data.body.items.forEach((item) => {
                            item.track.artists.forEach((artist) => {
                              artistIdsArr.push(artist.id);
                            })
                          })
                          return artistIdsArr
                        }).then(function(artistIds) {
                          spotifyApi.getArtists(artistIds)
                          .then(function(data) {
                            data.body.artists.forEach((artist) => {
                              const { id, name, followers, images, external_urls } = artist;
                              const totalFollowers = _.get(followers, 'total', 0);
                              const firstImage = images[0];
                              const firstImageUrl = _.get(firstImage, 'url', '');
                              const spotify = _.get(external_urls, 'spotify', '');
                              artistDetails5.push(
                                {
                                  id,
                                  artist: name,
                                  spotifyFollowers: totalFollowers,
                                  img: firstImageUrl,
                                  spotify,
                                }
                              );
                            })
                            return artistDetails5
                          }).then(function(artistDetails6) {
                            spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 200 })
                            .then(function(data) {
                              const artistIdsArr = [];
                              data.body.items.forEach((item) => {
                                item.track.artists.forEach((artist) => {
                                  artistIdsArr.push(artist.id);
                                })
                              })
                              return artistIdsArr
                            }).then(function(artistIds) {
                              spotifyApi.getArtists(artistIds)
                              .then(function(data) {
                                data.body.artists.forEach((artist) => {
                                  const { id, name, followers, images, external_urls } = artist;
                                  const totalFollowers = _.get(followers, 'total', 0);
                                  const firstImage = images[0];
                                  const firstImageUrl = _.get(firstImage, 'url', '');
                                  const spotify = _.get(external_urls, 'spotify', '');
                                  artistDetails6.push(
                                    {
                                      id,
                                      artist: name,
                                      spotifyFollowers: totalFollowers,
                                      img: firstImageUrl,
                                      spotify,
                                    }
                                  );
                                })
                                return artistDetails6
                              }).then(function(artistDetails7) {
                                const distinctArtists = _.uniqBy(artistDetails7, 'id')
                                const sorted = _.orderBy(distinctArtists, 'spotifyFollowers', 'desc')
                                const artists = sorted.map((item, index) => ({...item, position: index + 1 }))
                                res.json(artists)
                              },
                              function(err) {
                                console.error(err);
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
        })
      })
  });
});

app.get("/monthlyRecap", (req, res) => {
  let artistDetails = [];

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_API_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  spotifyApi.clientCredentialsGrant().then(
    function(data) {  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  ).then(function() {
    spotifyApi.getPlaylistTracks('58NEDLN8pRY27qU4zkWuZV', { limit: 40, offset: 0 })
      .then(function(data) {
        const artistIdsArr = [];
        data.body.items.forEach((item) => {
          item.track.artists.forEach((artist) => {
            artistIdsArr.push(artist.id);
          })
        })
        return artistIdsArr
      }).then(function(artistIds) {
        spotifyApi.getArtists(artistIds)
        .then(function(data) {
          data.body.artists.forEach((artist) => {
            const { id, name, followers, images, external_urls } = artist;
            const totalFollowers = _.get(followers, 'total', 0);
            const firstImage = images[0];
            const firstImageUrl = _.get(firstImage, 'url', '');
            const spotify = _.get(external_urls, 'spotify', '');
            artistDetails.push(
              {
                id,
                artist: name,
                spotifyFollowers: totalFollowers,
                img: firstImageUrl,
                spotify,
              }
            );
          })
          return artistDetails
        }).then(function(artistDetails2) {
          const distinctArtists = _.uniqBy(artistDetails2, 'id')
          const sorted = _.orderBy(distinctArtists, 'spotifyFollowers', 'desc')
          const artists = sorted.map((item, index) => ({...item, position: index + 1 }))
          res.json(artists)
        },
        function(err) {
          console.error(err);
        })
      })
  })
});

app.get("/weeklyRadar", (req, res) => {
  let artistDetails = [];

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_API_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  spotifyApi.clientCredentialsGrant().then(
    function(data) {  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  ).then(function() {
    spotifyApi.getPlaylistTracks('2RAgrtMEF6ZTTg2jh3FNY2', { limit: 40, offset: 0 })
      .then(function(data) {
        const artistIdsArr = [];
        data.body.items.forEach((item) => {
          item.track.artists.forEach((artist) => {
            artistIdsArr.push(artist.id);
          })
        })
        return artistIdsArr
      }).then(function(artistIds) {
        spotifyApi.getArtists(artistIds)
        .then(function(data) {
          data.body.artists.forEach((artist) => {
            const { id, name, followers, images, external_urls } = artist;
            const totalFollowers = _.get(followers, 'total', 0);
            const firstImage = images[0];
            const firstImageUrl = _.get(firstImage, 'url', '');
            const spotify = _.get(external_urls, 'spotify', '');
            artistDetails.push(
              {
                id,
                artist: name,
                spotifyFollowers: totalFollowers,
                img: firstImageUrl,
                spotify,
              }
            );
          })
          return artistDetails
        }).then(function(artistDetails2) {
          const distinctArtists = _.uniqBy(artistDetails2, 'id')
          const sorted = _.orderBy(distinctArtists, 'spotifyFollowers', 'desc')
          const artists = sorted.map((item, index) => ({...item, position: index + 1 }))
          res.json(artists)
        },
        function(err) {
          console.error(err);
        })
      })
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});