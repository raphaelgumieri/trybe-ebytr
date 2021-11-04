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

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const taskById = await tasksService.getTaskById(id);
  if (taskById.message) return res.status(400).json(taskById.message);
  return res.status(200).json(taskById);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedTask = await tasksService.updateTask(id, body);
  if (updatedTask.message) return res.status(400).json(updatedTask.message);
  return res.status(200).json(updatedTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.deleteTask(id);
  if (task.message) return res.status(400).json(task.message);
  return res.status(204).send();
};

module.exports = {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask,
};
