const { ObjectId } = require('mongodb');
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

const getTaskById = async (id) => {
  const db = await connection();
  const task = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  return task;
};

const updateTask = async (id, body) => {
  const { taskName, assignee, status } = body;
  const db = await connection();
  await db.collection('tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: { taskName, assignee, status } },
  );
  return {
    _id: id,
    taskName,
    assignee,
    status,
  };
};

module.exports = {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
};
