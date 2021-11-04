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

const getAllTasks = async () => tasksModel.getAllTasks();

const createNewTask = async (taskName, assignee, status) => {
  const isValid = validTask(taskName, assignee, status);
  if (isValid.details) { return isValid.details[0]; }
  return tasksModel.createNewTask(taskName, assignee, status);
};

module.exports = {
  getAllTasks,
  createNewTask,
};
