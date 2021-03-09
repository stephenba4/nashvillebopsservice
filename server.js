const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config({ path: "./.env" });

const app = express();

var corsOptions = {
  origin: (process.env.NODE_ENV === 'local' ? "http://localhost:8080" : "https://www.nashvillebops.com")
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json 
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: {
      grant_type: 'client_credentials',
    },
    headers: {
      Accept: 'application/json',
      Authorization: 'Basic 27314e11bc80475cbfa7657d2055fc8c:665b3582eed4452e8f2aba58f03e2d52',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => {
      res.json({response})
    })
    .catch((error) => {
      console.log(error)
    });
  // res.json({ name: 'Christina' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});