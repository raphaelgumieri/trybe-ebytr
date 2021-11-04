const express = require('express');
const { getAllTasks, createNewTask } = require('../controllers/tasksController');

const router = express.Router();

router.route('/')
  .get(getAllTasks)
  .post(createNewTask);

module.exports = router;
