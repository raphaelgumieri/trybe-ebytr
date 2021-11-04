const express = require('express');
const {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/tasksController');

const router = express.Router();

router.route('/')
  .get(getAllTasks)
  .post(createNewTask);

router.route('/:id')
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
