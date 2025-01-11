document.addEventListener("DOMContentLoaded", loadTasks);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");

  if (taskText !== "") {
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0];
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    const newTask = {
      id: Date.now(),
      text: taskText,
      createAt: formattedDateTime,
      isCompleted: false
    };

    const li = document.createElement("li");
    const span = document.createElement('span');
    span.textContent = newTask.createAt;
    li.textContent = newTask.text;

    const completeRadio = document.createElement('input');
    completeRadio.type = 'checkbox';
    completeRadio.style.backgroundColor = getRandomColor();
    completeRadio.checked = newTask.isCompleted;
    const deleteButton = createDeleteButton(li, newTask);
    completeRadio.addEventListener('change', () => {
      newTask.isCompleted = !newTask.isCompleted;
      if (newTask.isCompleted) {
        li.classList.add("completed");
        li.style.textDecoration = "line-through";
      } else {
        li.classList.remove("completed");
        li.style.textDecoration = "none";
      }
      saveTaskToLocalStorage(newTask);
    });

    li.appendChild(completeRadio);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    saveTaskToLocalStorage(newTask);
  } else {
    alertElement ? "" : alertThing();
  }
}

function alertThing() {
  const todoContainer = document.getElementsByClassName("todo-container")[0];
  const createDiv = document.createElement("div");
  createDiv.textContent = "Please enter the task";
  todoContainer.appendChild(createDiv);
  createDiv.classList.add("alert");
}

function createDeleteButton(listElement, task) {
  const removeLi = () => {
    removeTaskFromLocalStorage(task.id);
    listElement.remove();
  };

  return createButton("Delete", ["delete-btn"], removeLi);
}

function createButton(label, classNames, onclickMethod) {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(...classNames);
  button.style.backgroundColor = getRandomColor();
  button.onclick = () => {
    onclickMethod();
  };
  return button;
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  const taskList = document.getElementById("task-list");

  tasks.forEach((task) => {
    const li = document.createElement("li");
     const spanofTask = document.createElement('span')
     spanofTask.text
    li.textContent = task.text;
    const span = document.createElement('span');
    span.textContent = task.createAt;
    const completeRadio = document.createElement('input');
    completeRadio.type = 'checkbox';
    completeRadio.checked = task.isCompleted;
    const deleteButton = createDeleteButton(li, task);

    completeRadio.addEventListener('change', () => {
      task.isCompleted = !task.isCompleted;
      if (task.isCompleted) {
        li.classList.add("completed");
        li.style.textDecoration = "line-through";
      } else {
        li.classList.remove("completed");
        li.style.textDecoration = "none";
      }
      saveTaskToLocalStorage(task);
    });

    li.appendChild(completeRadio);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    if (task.isCompleted) {
      li.classList.add("completed");
      li.style.textDecoration = "line-through";
    }
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
