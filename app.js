var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

var destinations = [
    {name: 'Seville', description: 'Seville', next: 'canary-islands'},
    {name: 'Canary-Islands', description: 'Canary Islands', next: 'cape-verde'},
    {name: 'Cape-Verde', description: 'Cape Verde', next: 'strait-of-magellan'},
    {name: 'Strait-of-Magellan', description: 'Strait of Magellan', next: 'guam'},
    {name: 'Guam', description: 'Guam', next: 'philippines'},
    {name: 'Philippines', description: 'Philippines', next: 'none'}
];

app.get('/destinations/:input', function (req, res) {
    for (var i = 0; i < destinations.length; i++) {
        if (destinations[i].name.toUpperCase() === req.params.input.toUpperCase()) {
            return res.render('destinations', destinations[i]);
        }
    }

    return res.render('error');
});

// Each location stop
app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(4238, function() {
	console.log('Express server listening on port ' + server.address().port);
});
