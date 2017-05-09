const express = require('express');
const bodyParser = require('body-parser');


// initializing express and assigning it to variable app
var app = express();

app.listen(3000);


// sending client-code to the user, express will automatically parse stringified JSON.
app.use(express.static('assets'));
app.use(bodyParser.json())

var messages = [];

app.get('/messages', function(request, response, next){
    response.status(200).json({messages: messages });
})

app.post('/messages', function(request, response, next){
    messages.push({ message: request.body.message, time: new Date()});
    response.status(200).json({ messages: messages })
})