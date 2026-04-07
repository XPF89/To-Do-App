const db = require("../db");

// Add Task
const addTask = (title, callback) => {
  const sql = "INSERT INTO tasks (title) VALUES (?)";
  db.query(sql, [title], callback);
};

// Get All Tasks
const getTasks = (callback) => {
  const sql = "SELECT * FROM tasks ORDER BY id DESC";
  db.query(sql, callback);
};

module.exports = {
  addTask,
  getTasks
};