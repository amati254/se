//const prettyjson = require('prettyjson')
const options = {
	noColor: true
};

const express = require('express'),
      bodyParser = require('body-parser'),
      app = express();

//const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/b2c/result', (req, res) => {
	console.log('-----------B2C CALLBACK------------');
	console.log(req.body, options);
	console.log('-----------------------');

	let message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

app.post('/b2c/timeout', (req, res) => {
	console.log('-----------B2C TIMEOUT------------');
	console.log(req.body, options);
	console.log('-----------------------');

	let message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
