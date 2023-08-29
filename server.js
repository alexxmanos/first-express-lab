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
    const tipPercentage = Number ('0.${req.params.tipPercentage}');
    const newTotal = total * tipPercentage;
    
  
    res.send('${newTotal}')
})







app.listen(3000, () => console.log('Listening on port 3000'))