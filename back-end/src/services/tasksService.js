const servicesModel = require('../models/tasksModel');

const getAllTasks = async () => servicesModel.getAllTasks();

module.exports = {
  getAllTasks,
};
