const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = Number(process.env.PORT || 5000);
const path = require("path");

app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/index.html', function(req, res) {
	console.log(2);
	console.log(__dirname);
    res.sendFile(path.join(__dirname, 'public/index.html'));
	res.end();
});

app.listen(port, () => {
  console.log('Server listening on: ', port)
});

console.log(1);

