const express = require('express');
const { getAllTasks, createNewTask, getTaskById } = require('../controllers/tasksController');

const router = express.Router();

router.route('/')
  .get(getAllTasks)
  .post(createNewTask);

router.route('/:id')
  .get(getTaskById);
// .put(updateTask);

module.exports = router;
