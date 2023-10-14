const express = require('express');
const userModel = require('../models/tasks');

const tasksRouter = express.Router();

//create task
tasksRouter.post('/tasks', (req, res) => {
    const tasks = userModel(req.body);
    tasks
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 

//obtener todos los tasks
tasksRouter.get('/tasks', (req, res) => {
    userModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//encontrar una task por id
tasksRouter.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    userModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar una tasks por id
tasksRouter.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { descripcion, estado, prioridad, notaadicional} = req.body;
    userModel
    .updateOne({ _id: id}, { $set: {descripcion, estado, prioridad, notaadicional}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//borrar una tasks
tasksRouter.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    userModel
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = tasksRouter;
