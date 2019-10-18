
require("dotenv").config();


var Spotify = require("node-spotify-api"):
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);