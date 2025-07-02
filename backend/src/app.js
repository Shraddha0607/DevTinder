const express = require('express');

const app = express();

// query way to get data
app.get('/user', (req, res) => {
    console.log(req.query);
    res.send("Data sended by query using '?' ")
});

// params way to get data
app.get('/user/:userId/:password', (req, res) => {
    console.log(req.params);
    res.send("Data taken by params using direct from url ")
});

app.get('/', (req, res) => res.send("api is hitting"));

app.post('/user', (req, res) => res.send("Data save successfully."));
app.delete('/user', (req, res) => res.send("Data deleted successfully."));
app.patch('/user', (req, res) => res.send("Data patched successfully."));

app.get('/test', (req, res) => res.send("I am testing"));
app.get('/user', (req, res) => res.send({"FirstName" : "Shraddha", "LastName" : "Gaur"}));

app.listen(3000, () => console.log("server running on port 3000"));