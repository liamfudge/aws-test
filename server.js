const express = require('express');
const bodyParser = require('body-parser');
const csv = require('fast-csv');
const cors = require('cors');
// const bcrypt = require('bcrypt-nodejs');
// const knex = require('knex');
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


const PORT = process.env.HTTP_PORT || 4001;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors());


app.get('/test', (req, res) => {
	res.json('just gonna send it');
})

app.get('/flower', (req, res) => {
	res.json({
		name: 'Dandelion',
		colour: 'Blue-ish'
	});
})

app.listen(PORT, ()=> {
	console.log('app is running on port 4001');
})
