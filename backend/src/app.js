const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("api is hitting"));

app.post('/user', (req, res) => res.send("Data save successfully."));
app.delete('/user', (req, res) => res.send("Data deleted successfully."));
app.patch('/user', (req, res) => res.send("Data patched successfully."));

app.get('/test', (req, res) => res.send("I am testing"));
app.get('/user', (req, res) => res.send({"FirstName" : "Shraddha", "LastName" : "Gaur"}));

app.listen(3000, () => console.log("server running on port 3000"));