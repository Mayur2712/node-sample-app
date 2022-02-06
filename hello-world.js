const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Get Hello World!')
    res.send('Hello World, from express');
});

app.get('/user/:id', function(req, res) {
    console.log('user requesting is: ' + req.params.id);
    res.send('user: ' + req.params.id);    
  });

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
