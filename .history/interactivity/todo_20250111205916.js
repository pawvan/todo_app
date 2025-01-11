document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();