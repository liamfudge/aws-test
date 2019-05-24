const express = require('express');
const bodyParser = require('body-parser');
const csv = require('fast-csv');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');
const path = require('path');

// const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'liamfudge',
//     password : '',
//     database : 'accountable'
//   }
// });




const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());


app.get('/test', (req, res) => {
	res.json('hellloooooo');
})


app.listen(3000, ()=> {
	console.log('app is running on port 3000');
})
