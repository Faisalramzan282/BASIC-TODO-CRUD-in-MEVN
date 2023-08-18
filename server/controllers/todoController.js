// controllers/todoController.js
const Todo = require('../model/todo.js');

exports.getTodos =  async (req, res) => {
    try {
        const todoList = await Todo.find()
        if (!todoList) throw new Error('No Todo List found')
        res.status(200).json(todoList)
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch todos.'})
    }
}

exports.createTodo = async (req, res) => {
    const newTodo = new Todo(req.body)
    try {
        const todo = await newTodo.save()
        if (!todo) throw new Error('Something went wrong saving the Todo')
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Todo.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}