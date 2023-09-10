// Greetings //

const express = require('express');

const app = express();

app.get('/greeting', (req, res) => {
    res.send("Hello, stranger")
})

app.get('greeting/:name', (req, res) => {
    res.send('Hello, ${req.params.name}')
})

// Tip Calculator //

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = Number (req.params.total);
    const tipPercentage = Number (`0.${req.params.tipPercentage}`);
    const newTotal = total * tipPercentage;
    
  
    res.send(`${newTotal}`)
})

// Magic 8 Ball // 

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    const magic8BallResponses = [
        "It is certain", 
        "It is decidedly so", 
        "Without a doubt", 
        "Yes definitely",
        "You may rely on it", 
        "As I see it yes", 
        "Most likely", 
        "Outlook good",
        "Yes", 
        "Signs point to yes", 
        "Reply hazy try again", 
        "Ask again later",
        "Better not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again",
        "Don't count on it", 
        "My reply is no", 
        "My sources say no",
        "Outlook not so good", 
        "Very doubtful"
    ];
    const randIdx = Math. floor(Math. random()*20);
    
    
    
    
  res.send(`<h1>Will I Be A Millionaire? ${magic8BallResponses[randIdx]}</h1>`);
})









app.listen(3000, () => console.log('Listening on port 3000'))
