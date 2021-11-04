const tasksService = require('../services/tasksService');

const getAllTasks = async (req, res) => {
  const allTasks = await tasksService.getAllTasks();
  return res.status(200).json(allTasks);
};

const createNewTask = async (req, res) => {
  const { taskName, assignee, status } = req.body;
  const newTask = await tasksService.createNewTask(taskName, assignee, status);
  if (newTask.message) return res.status(400).json(newTask.message);
  return res.status(201).json(newTask);
};

module.exports = {
  getAllTasks,
  createNewTask,
};
