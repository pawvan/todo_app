document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");
  if (taskText !== "") {
    const newTask = {
      id: Date.now(),
      text: taskText,
      createdAt: new Date().toISOString(),
      isCompleted: false,
    };

    const li = createTaskElement(newTask);

    taskList.appendChild(li);
    taskInput.value = "";
    saveTaskToLocalStorage(newTask);
  } else {
    if (!alertElement) alertThing();
  }
}
function alertThing() {
  const todoContainer = document.getElementsByClassName("todo-container")[0];
  const createDiv = document.createElement("div");
  createDiv.textContent = "Please enter the task";
  todoContainer.appendChild(createDiv);
  createDiv.classList.add("alert");

  setTimeout(() => {
    createDiv.remove();
  }, 3000);
}

function createDeleteButton(task, li) {
  const removeTask = () => {
    removeTaskFromLocalStorage(task.id);
    li.remove();
  };

  const deleteButton = createButton("x", ["delete-btn"], removeTask);
  return deleteButton;
}

function createCompleteButton(task, li) {
  const toggleComplete = () => {
    task.isCompleted = !task.isCompleted;
    li.classList.toggle("completed", task.isCompleted);
    li.style.textDecoration = task.isCompleted ? "line-through" : "none";
    updateTaskInLocalStorage(task);
  };

  const completeButton = createButton(
    task.isCompleted ? "Uncomplete" : "Complete",
    ["complete-btn"],
    toggleComplete
  );

  return completeButton;
}

function createButton(label, classNames, onClick) {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(...classNames);
  button.onclick = onClick;
  return button;
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task.text;
  li.classList.toggle("completed", task.isCompleted);
  li.style.textDecoration = task.isCompleted ? "line-through" : "none";

  const completeButton = createCompleteButton(task, li);
  const deleteButton = createDeleteButton(task, li);

  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  return li;
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  const taskList = document.getElementById("task-list");

  tasks.forEach((task) => {
    const li = createTaskElement(task);
    taskList.appendChild(li);
  });
}

function saveTaskToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function removeTaskFromLocalStorage(taskId) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function updateTaskInLocalStorage(updatedTask) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
