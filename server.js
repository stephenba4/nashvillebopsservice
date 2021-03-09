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
  res.json({ name: 'Christina' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});