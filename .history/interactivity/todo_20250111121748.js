document.addEventListener("DOMContentLoaded", loadTasks); 
function addTask() {
  const todoContainer = document.getElementsByClassName("todo-container")[0];
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const completeButton = createCompleteButton(li);
    const deleteButton = createDeleteButton(li);

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    saveTaskToLocalStorage(taskText); // Save task to localStorage

    taskInput.value = "";
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

  // Remove the alert after 3 seconds
  setTimeout(() => createDiv.remove(), 3000);
}

function createDeleteButton(listElement) {
  const removeLi = () => {
    removeTaskFromLocalStorage(listElement.textContent); // Remove task from localStorage
    listElement.remove();
  };

  const deleteButton = createButton("x", "delete-btn", removeLi);
  return deleteButton;
}

function createCompleteButton(listElement) {
  const completeCallBack = () => {
    if (listElement.classList.contains("completed")) {
      listElement.classList.remove("completed");
      listElement.style.textDecoration = "none";
    } else {
      listElement.classList.add("completed");
      listElement.style.textDecoration = "line-through";
    }
  };

  const completeButton = createButton("Complete", "complete-btn", completeCallBack);
  return completeButton;
}

function createButton(label, classNames, onclickMethod) {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(classNames);
  button.onclick = onclickMethod;
  return button;
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  const taskList = document.getElementById("task-list");

  tasks.forEach((taskText) => {
    const li = document.createElement("li");
    li.textContent = taskText;

    const completeButton = createCompleteButton(li);
    const deleteButton = createDeleteButton(li);

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function saveTaskToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskText) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter((task) => task !== taskText.trim());
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
