const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.use(express.static('.'))


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'))
});
app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname + '/signup.html'))
});
app.get('/stdgvt', function (req, res) {
  res.sendFile(path.join(__dirname + '/government.html'))
});
app.get('/articles', function (req, res) {
  res.sendFile(path.join(__dirname + '/articles.html'))
});
app.get('/report', function (req, res) {
  res.sendFile(path.join(__dirname + '/userReport.html'))
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))