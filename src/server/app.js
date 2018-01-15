var express = require('express');
var path = require('path');
var app = express();
let oddEven = require('./modules/oddEven');
let capitalize = require('./modules/capitalize');
let bodyParser = require('body-parser');

app.use(express.static('src/server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(4005, function() {
  console.log('up on 4005');
});

app.get('/oddEven/:num',(req,res) => {
  let number = parseFloat(req.params.num);
  try {
    let result = oddEven(number);
    res.send({result});
  } catch(error) {
    res.status(500).send(error.message);
  }
});

app.post('/capitalize',(req,res) => {
  let str = req.body.sentence;
  try {
    let result = capitalize(str);
    res.send({result});
  } catch(error) {
    res.status(500).send(error.message);
  }
})

// This allows us to easily test the server
module.exports = app;
