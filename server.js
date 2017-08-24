var express = require('express'),
    morgan = require('morgan'),
	app = express(),
    port = process.env.PORT || 8000,
    path = require('path');

app.use(morgan('dev'));

app.use(express.static('./app'))
app.all('/docs', function(req, res) {
    app.use(express.static('./public'))
    res.sendFile( path.resolve('public/index.html') );
});

app.listen(port);