const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.delete('/todos', todoController.deleteTodo);
module.exports = router;