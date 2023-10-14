const express = require('express');
const userSchema = require('../models/users');

const userRouter = express.Router();

//create user
userRouter.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los usuarios
userRouter.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//encontrar un usuario por id
userRouter.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un usuario
userRouter.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password, rol } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: {name, email, password, rol} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//borrar un usuario
userRouter.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = userRouter;