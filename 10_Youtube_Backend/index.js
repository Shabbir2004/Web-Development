const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Ensure "files" directory exists
if (!fs.existsSync("./files")) {
  fs.mkdirSync("./files");
}

// Function to get all tasks
const getTasks = () => {
  const files = fs.readdirSync("./files");
  return files.map((file) => ({
    title: file.replace(".txt", ""),
    description: fs.readFileSync(`./files/${file}`, "utf-8"),
  }));
};

// Home Route - Shows list of tasks
app.get("/", (req, res) => {
  const tasks = getTasks();
  res.render("index", { tasks });
});

// POST Route - Add Task
app.post("/add-task", (req, res) => {
  const { title, description } = req.body;
  if (!title.trim()) return res.redirect("/");
  fs.writeFileSync(`./files/${title}.txt`, description || "No description");
  res.redirect("/");
});

// Dynamic Route - Show Full Task
app.get("/task/:title", (req, res) => {
  const taskTitle = req.params.title;
  const filePath = `./files/${taskTitle}.txt`;

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Task not found");
  }

  const taskDescription = fs.readFileSync(filePath, "utf-8");
  res.render("task", { title: taskTitle, description: taskDescription });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
