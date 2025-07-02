const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("api is hitting"));

app.get('/test', (req, res) => res.send("I am testing"));
app.get('/user', (req, res) => res.send("I am user"));

app.listen(3000, () => console.log("server running on port 3000"));