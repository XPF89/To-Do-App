const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const taskRoutes = require("./routes/taskRoutes");

// Use routes
app.use("/", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});