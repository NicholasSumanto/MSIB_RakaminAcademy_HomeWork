const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.get('/todos', todoController.getAllTodo);


router.get('/todos/:id', todoController.getTodoById);


router.post('/todos', todoController.createTodo);


router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
