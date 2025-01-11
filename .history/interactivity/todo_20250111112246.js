function addTask() {
  const todoContainer = document.getElementsByClassName("todo-container")[0];
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    const completeButton = createCompleteButton();
    const deleteButton = createDeleteButton();
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alertElement ? "" : alertThing();
  }
}

function alertThing() {
  const createDiv = document.createElement("div");
  createDiv.textContent = "please enter the task";
  todoContainer.appendChild(createDiv);
  createDiv.classList.add("alert");
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    li.remove();
  };
  return deleteButton;
}
function createCompleteButton() {
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("complete-btn");
  completeButton.onclick = function () {
    if (li.classList.contains("completed")) {
      li.classList.remove("completed");
      completeButton.textContent = "Complete";
      li.style.textDecoration = "none";
    } else {
      li.classList.add("completed");
      completeButton.textContent = "Uncomplete";
      li.style.textDecoration = "line-through";
    }
  };
  return completeButton;
}
