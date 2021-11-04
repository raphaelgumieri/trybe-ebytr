const { ObjectId } = require('mongodb');
const Joi = require('joi');
const tasksModel = require('../models/tasksModel');

const validTask = (taskName, assignee, status) => {
  const { error } = Joi.object({
    taskName: Joi.string().required(),
    assignee: Joi.string().required(),
    status: Joi.string().required(),
  }).validate({ taskName, assignee, status });
  if (error) { return error; }
  return true;
};

const validId = (id) => ObjectId.isValid(id);

const getAllTasks = async () => tasksModel.getAllTasks();

const createNewTask = async (taskName, assignee, status) => {
  const isValid = validTask(taskName, assignee, status);
  if (isValid.details) { return isValid.details[0]; }
  return tasksModel.createNewTask(taskName, assignee, status);
};

const getTaskById = async (id) => {
  if (!validId(id)) { return { message: 'id not  valid' }; }
  const task = await tasksModel.getTaskById(id);
  if (!task) return { message: 'id not found' };
  return task;
};

const updateTask = async (id, body) => {
  const { taskName, assignee, status } = body;
  const isValid = validTask(taskName, assignee, status);
  if (isValid.details) { return isValid.details[0]; }

  if (!validId(id)) { return { message: 'id not  valid' }; }
  const task = await tasksModel.getTaskById(id);
  if (!task) return { message: 'id not found' };

  const updatedTask = tasksModel.updateTask(id, body);
  return updatedTask;
};

module.exports = {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
};
