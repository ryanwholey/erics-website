const express = require('express');
const path = require('path');

const app = express();
const port = 8080;
const host = '10.0.0.114';

app.use('/', express.static(path.resolve(__dirname, '../')));

app.listen(port, host, (err) => {
	if (err) {
		console.error('Error starting server', err);
		process.exit(1);
	}
	console.log(`Server started at ${port}`);
});
