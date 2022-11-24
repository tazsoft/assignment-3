const { MongoClient } = require("mongodb");

require('dotenv').config();

const client = new MongoClient(process.env.url);

console.log("success");

