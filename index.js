const express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('Main page');
})

app.listen(3000, function() {
    console.log('Run');
})