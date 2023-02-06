const {Client} = require("pg");
const dotenv = require("dotenv");
dotenv.config({path: "./.env"});

const client = new Client({
    host: "localhost",
    user: process.env.USER,
    port: 5432,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

module.exports = client;