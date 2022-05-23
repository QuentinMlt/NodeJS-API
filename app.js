const express = require('express');
require('express-async-errors');
const app = express(); 

const Joi = require("joi");

const Collection = require("./Tache.js");
const Taches = new Collection("Taches");


app.use(express.json());

app.get('/', (req, res) => {
	res.send("Hello World");
})

app.get("/api/taches", (req, res) => {
    res.json(Taches.getAll());
  });

  app.post('/api/taches/add', (req, res) => {
    const payload = req.body;
    const joiSchema = Joi.object({
        description: Joi.string().max(255).required(),
        faite: Joi.boolean().required()
    });
    const {value, error} = joiSchema.validate(payload);
    if (error) {
        throw new Error(error.details[0].message);
    }
    Taches.insertOne(value);
    res.status(201).send(value);
});
  

  module.exports = app;
