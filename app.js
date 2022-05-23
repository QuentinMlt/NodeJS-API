const express = require('express');

const app = express() 

const Collection = require("./Tache.js");
const Taches = new Collection("Taches");

app.use(express.json());

app.get('/', (req, res) => {
	res.send("Hello World");
})

app.get("/api/taches", (req, res) => {
    res.json(Taches.getAll());
  });


app.listen(5000);
