const { MongoClient } = require("mongodb");

require('dotenv').config();

const client = new MongoClient(process.env.url);

console.log("connection success");

module.exports={client};

