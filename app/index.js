const http = require('http');
const https = require('https');
const iconv = require("iconv-lite");
const path = require("path");
const fs = require("fs");
const express = require('express');
const app = express();

const option = {
    key:fs.readFileSync('./www.tjwyz.com.key'),
    cert:fs.readFileSync('./www.tjwyz.com.crt')
};

// app.use('/static', express.static( path.join(__dirname, '/static') ));
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../static')));

app.get('/', function(req, res) {
	res.set('Content-Type', 'text/html');
	var html = fs.readFileSync(path.join(__dirname, '../public/index.html'),{encoding:'utf8'});
	res.send(html);
});

app.get('/api', function(req, res) {
	// res.send(req.query.query);
	new Promise(function(resolve,reject){
		http.get('http://weatherpwa.baidu.com/api/weather?query=' + encodeURIComponent(req.query.query) ,(res) => {
			const { statusCode } = res;
			const contentType = res.headers['content-type'];
			let error;
			if (statusCode !== 200) {
				error = new Error('Request Failed.\n' +
									`Status Code: ${statusCode}`);
			} else if (!/^application\/json/.test(contentType)) {
			    error = new Error('Invalid content-type.\n' +
			                      `Expected application/json but received ${contentType}`);
			}

			if (error) {
				console.error(error.message);
				// consume response data to free up memory
				res.resume();
				return;
			}

		    var rawData='';  
		    // res.setEncoding('utf-8');
		    res.on('data',(data) => {
		    	data = iconv.decode(data, 'GBK');
		    	rawData+=data;
		    });
		    res.on('end',() => {  
				try {
					var parsedData = JSON.parse(rawData);
					ret = parsedData.data[0] && parsedData.data[0].forecast6d;
					ret.ps_pm25 = parsedData.data[0].ps_pm25;
					ret.county = parsedData.data[0].county;
					
					resolve(ret);
				} catch (e) {
					console.error(e.message);
				}
		    });
		}); 
	}).then(function(data){
		if(!data) res.send('noData');
		res.send(data);
	});
});

http.createServer(app).listen(80);
https.createServer(option,app).listen(443);