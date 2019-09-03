const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))