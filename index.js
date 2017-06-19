const express = require('express');
const app = express();

app.get("/lorem/:paraCount", function (req, res) {
	var loremIpsum = require('lorem-ipsum')
	  , output     = loremIpsum({
			count: req.params.paraCount
	  , units: 'paragraphs'
		, format: 'html'
	})
	  res.send(output);
	});

	app.get("/lorem/", function (req, res) {
		var loremIpsum = require('lorem-ipsum')
		  , output     = loremIpsum({
				count: 3
		  , units: 'paragraphs'
			, format: 'html'
		})
		  res.send(output);
		});

app.listen(3000, function () {
	  console.log('Successfully started express application!')
	});
