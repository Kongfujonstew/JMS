var express = require("express");
var app = express();

// Set up a URL route

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 1981;

app.listen(port);

console.log("Listening on port " + port);



app.use('/', express.static('src/client'));
// app.use('/blog', express.static('src/client/blog.html'));
// Render some console log output

app.get('/test', function(req, res) {
  res.render('src/client/app/testArea.js');
})