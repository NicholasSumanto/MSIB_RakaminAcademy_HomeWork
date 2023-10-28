const { Todo } = require('../models');

const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.findAll({ where: { deleted_at: null } });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ where: { id, deleted_at: null } });
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const createTodo = async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const todo = await Todo.create({ title, description, completed });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ where: { id, deleted_at: null } });
    if (todo) {
      await todo.update({ deleted_at: new Date() });
      res.status(200).json({ message: 'Todo deleted successfully' });
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  getAllTodo,
  getTodoById,
  createTodo,
  deleteTodo,
};
