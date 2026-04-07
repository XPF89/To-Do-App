const express = require("express");
const router = express.Router();

const taskModel = require("../models/taskModel");

// ➕ Add Task
router.post("/add", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Task title is required" });
  }

  taskModel.addTask(title, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to add task" });
    }
    res.json({ message: "Task added successfully" });
  });
});

// 📥 Get Tasks
router.get("/tasks", (req, res) => {
  taskModel.getTasks((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch tasks" });
    }
    res.json(results);
  });
});

module.exports = router;