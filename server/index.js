const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const http = require('http');
//const https = require('https');
const corsMiddleware = require('./middleware/cors.middleware');
const secrets = require('/etc/secrets/secrets');

const PORT = process.env.PORT || 3499;

const app = express();
// const options = {
//   key: fs.readFileSync('./api.arith.ru.key'),
//   cert: fs.readFileSync('./api.arith.ru.pem')
// };

// app.all('*', secure = (req, res, next) => {
// 	if (req.secure) {
// 		return next();
// 	}
// 	res.redirect('https://api.arith.ru' + req.url);
// });
app.use(corsMiddleware);
app.use(express.json());
app.use('/', router);

const start = async () => {
	try {
		await mongoose.connect(secrets.uri);
		http.createServer(app).listen(PORT);
		//https.createServer(options, app).listen(443);
	} catch (e) {
		console.log(e);
	}
}

start();
