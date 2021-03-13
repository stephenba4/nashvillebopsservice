const express = require("express");
const cors = require("cors");
require('dotenv').config({ path: "./.env" });
const SpotifyWebApi = require('spotify-web-api-node');
const _ = require('lodash');
const { resolve } = require("url");

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
  let artistDetails = [];

  spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 0 })
  .then(function(data) {
    const artistIdsArr = [];
    data.body.items.forEach((item) => {
      item.track.artists.forEach((artist) => {
        artistIdsArr.push(artist.id);
      })
    })
    const artistIdsSet = new Set(artistIdsArr);
    artistIds = [...artistIdsSet];
    return artistIds
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
      spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 25 })
        .then(function(data) {
          const artistIdsArr = [];
          data.body.items.forEach((item) => {
            item.track.artists.forEach((artist) => {
              artistIdsArr.push(artist.id);
            })
          })
          const artistIdsSet = new Set(artistIdsArr);
          artistIds = [...artistIdsSet];
          return artistIds
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
            spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 50 })
            .then(function(data) {
              const artistIdsArr = [];
              data.body.items.forEach((item) => {
                item.track.artists.forEach((artist) => {
                  artistIdsArr.push(artist.id);
                })
              })
              const artistIdsSet = new Set(artistIdsArr);
              artistIds = [...artistIdsSet];
              return artistIds
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
                spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 75 })
                .then(function(data) {
                  const artistIdsArr = [];
                  data.body.items.forEach((item) => {
                    item.track.artists.forEach((artist) => {
                      artistIdsArr.push(artist.id);
                    })
                  })
                  const artistIdsSet = new Set(artistIdsArr);
                  artistIds = [...artistIdsSet];
                  return artistIds
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
                    spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 100 })
                    .then(function(data) {
                      const artistIdsArr = [];
                      data.body.items.forEach((item) => {
                        item.track.artists.forEach((artist) => {
                          artistIdsArr.push(artist.id);
                        })
                      })
                      const artistIdsSet = new Set(artistIdsArr);
                      artistIds = [...artistIdsSet];
                      return artistIds
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
                        spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 125 })
                        .then(function(data) {
                          const artistIdsArr = [];
                          data.body.items.forEach((item) => {
                            item.track.artists.forEach((artist) => {
                              artistIdsArr.push(artist.id);
                            })
                          })
                          const artistIdsSet = new Set(artistIdsArr);
                          artistIds = [...artistIdsSet];
                          return artistIds
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
                            spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 150 })
                            .then(function(data) {
                              const artistIdsArr = [];
                              data.body.items.forEach((item) => {
                                item.track.artists.forEach((artist) => {
                                  artistIdsArr.push(artist.id);
                                })
                              })
                              const artistIdsSet = new Set(artistIdsArr);
                              artistIds = [...artistIdsSet];
                              return artistIds
                            }).then(function(artistIds) {
                              spotifyApi.getArtists(artistIds)
                              .then(function(data) {
                                data.body.artists.forEach((artist) => {
                                  const { id, name, followers, images, external_urls } = artist;
                                  const totalFollowers = _.get(followers, 'total', 0);
                                  const firstImage = images[0];
                                  const firstImageUrl = _.get(firstImage, 'url', '');
                                  const spotify = _.get(external_urls, 'spotify', '');
                                  artistDetails7.push(
                                    {
                                      id,
                                      artist: name,
                                      spotifyFollowers: totalFollowers,
                                      img: firstImageUrl,
                                      spotify,
                                    }
                                  );
                                })
                                return artistDetails7
                              }).then(function(artistDetails8) {
                                spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 175 })
                                .then(function(data) {
                                  const artistIdsArr = [];
                                  data.body.items.forEach((item) => {
                                    item.track.artists.forEach((artist) => {
                                      artistIdsArr.push(artist.id);
                                    })
                                  })
                                  const artistIdsSet = new Set(artistIdsArr);
                                  artistIds = [...artistIdsSet];
                                  return artistIds
                                }).then(function(artistIds) {
                                  spotifyApi.getArtists(artistIds)
                                  .then(function(data) {
                                    data.body.artists.forEach((artist) => {
                                      const { id, name, followers, images, external_urls } = artist;
                                      const totalFollowers = _.get(followers, 'total', 0);
                                      const firstImage = images[0];
                                      const firstImageUrl = _.get(firstImage, 'url', '');
                                      const spotify = _.get(external_urls, 'spotify', '');
                                      artistDetails8.push(
                                        {
                                          id,
                                          artist: name,
                                          spotifyFollowers: totalFollowers,
                                          img: firstImageUrl,
                                          spotify,
                                        }
                                      );
                                    })
                                    return artistDetails8
                                  }).then(function(artistDetails9) {
                                    
                                    spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 200 })
                                .then(function(data) {
                                  const artistIdsArr = [];
                                  data.body.items.forEach((item) => {
                                    item.track.artists.forEach((artist) => {
                                      artistIdsArr.push(artist.id);
                                    })
                                  })
                                  const artistIdsSet = new Set(artistIdsArr);
                                  artistIds = [...artistIdsSet];
                                  return artistIds
                                }).then(function(artistIds) {
                                  spotifyApi.getArtists(artistIds)
                                  .then(function(data) {
                                    data.body.artists.forEach((artist) => {
                                      const { id, name, followers, images, external_urls } = artist;
                                      const totalFollowers = _.get(followers, 'total', 0);
                                      const firstImage = images[0];
                                      const firstImageUrl = _.get(firstImage, 'url', '');
                                      const spotify = _.get(external_urls, 'spotify', '');
                                      artistDetails9.push(
                                        {
                                          id,
                                          artist: name,
                                          spotifyFollowers: totalFollowers,
                                          img: firstImageUrl,
                                          spotify,
                                        }
                                      );
                                    })
                                    return artistDetails9
                                  }).then(function(artistDetails10) {
                                    spotifyApi.getPlaylistTracks('0T9TsvrNtkbbwSxj29341t', { limit: 40, offset: 225 })
                                    .then(function(data) {
                                      const artistIdsArr = [];
                                      data.body.items.forEach((item) => {
                                        item.track.artists.forEach((artist) => {
                                          artistIdsArr.push(artist.id);
                                        })
                                      })
                                      const artistIdsSet = new Set(artistIdsArr);
                                      artistIds = [...artistIdsSet];
                                      return artistIds
                                    }).then(function(artistIds) {
                                      spotifyApi.getArtists(artistIds)
                                      .then(function(data) {
                                        data.body.artists.forEach((artist) => {
                                          const { id, name, followers, images, external_urls } = artist;
                                          const totalFollowers = _.get(followers, 'total', 0);
                                          const firstImage = images[0];
                                          const firstImageUrl = _.get(firstImage, 'url', '');
                                          const spotify = _.get(external_urls, 'spotify', '');
                                          artistDetails10.push(
                                            {
                                              id,
                                              artist: name,
                                              spotifyFollowers: totalFollowers,
                                              img: firstImageUrl,
                                              spotify,
                                            }
                                          );
                                        })
                                        return artistDetails10
                                      }).then(function(artistDetails11) {
                                        const distinctArtists = _.uniqBy(artistDetails11, 'id')
                                        res.json(distinctArtists)
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
              })
            })
          })
        })
      })
    })
    })
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});