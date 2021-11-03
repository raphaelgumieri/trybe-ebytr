const tasksService = require('../services/tasksService');

const getAllTasks = async (req, res) => {
  const allTasks = await tasksService.getAllTasks();
  return res.status(200).json(allTasks);
};

module.exports = {
  getAllTasks,
};
