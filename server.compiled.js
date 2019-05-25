"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var csv = require('fast-csv');

var cors = require('cors'); // const bcrypt = require('bcrypt-nodejs');
// const knex = require('knex');


var path = require('path'); // const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'liamfudge',
//     password : '',
//     database : 'accountable'
//   }
// });


var PORT = process.env.HTTP_PORT || 4001;
var app = express();
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.use(cors());
app.get('/test', function (req, res) {
  res.json('just gonna send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log('app is running on port 4001');
});
