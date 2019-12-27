var express = require('express');
var app = express();

var router = require('./router/main')(app);

var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.listen(port, function() {
  console.log("Server On - localhost:80");
});
