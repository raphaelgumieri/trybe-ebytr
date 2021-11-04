// const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTasks = async () => {
  const db = await connection();
  const allTasks = await db.collection('tasks').find().toArray();
  return allTasks;
};

const createNewTask = async (taskName, assignee, status) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('tasks')
    .insertOne({ taskName, assignee, status });
  return {
    _id,
    taskName,
    assignee,
    status,
  };
};

module.exports = {
  getAllTasks,
  createNewTask,
};
