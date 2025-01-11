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
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}1:${String(now.getMinutes()).padStart(2, '0')}`;
    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    const newTask = {
      id: Date.now(),
      text: taskText,
      createAt: formattedDateTime,
      isCompleted: false
    };
    
    const li = document.createElement("li");
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const span = document.createElement('span');
    span.textContent = newTask.createAt
    const spanofTask = document.createElement('span');
    spanofTask.textContent = newTask.text;
   spanofTask.style.color='black'
   spanofTask.style.fontWeight='700'
    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.checked = newTask.isCompleted;
    // completeCheckbox.style.borderColor = getRandomColor();
    completeCheckbox.style.borderWidth = '2px'; 
    completeCheckbox.style.borderStyle = 'solid';
    completeCheckbox.style.padding = '5px';
    completeCheckbox.style.width = '23px';
    completeCheckbox.style.height = '23px';
    completeCheckbox.style.borderRadius = '50%'; 
    const wrapperCheck = document.createElement('span');
    wrapperCheck.classList.add('wrapper-check')
    wrapperCheck.style.backgroundColor=getRandomColor()
    wrapperCheck.appendChild(completeCheckbox);
    const deleteButton = createDeleteButton(li, newTask);
    completeCheckbox.addEventListener('change', () => {
      newTask.isCompleted = !newTask.isCompleted;
      if (newTask.isCompleted) {
        spanofTask.classList.add("completed");
        spanofTask.style.textDecoration = "line-through";
      } else {
        spanofTask.classList.remove("completed");
        spanofTask.style.textDecoration = "none";
      }
      saveTaskToLocalStorage(newTask);
    });
    wrapper.appendChild(spanofTask);
    wrapper.appendChild(span);
    li.appendChild(wrapperCheck);
    li.appendChild(wrapper);
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
  button.onclick = () => {
    onclickMethod();
  };
  button.style.fontWeight='600'
  button.style.color='black'
  return button;
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  const taskList = document.getElementById("task-list");

  tasks.forEach((task) => {
    const li = document.createElement("li");
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const span = document.createElement('span');
    span.textContent = task.createAt;
    const spanofTask = document.createElement('span');
    spanofTask.textContent = task.text;

    const wrapperCheck = document.createElement('span');
    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.checked = task.isCompleted;

    completeCheckbox.style.borderColor = getRandomColor();
    completeCheckbox.style.borderWidth = '2px'; 
    completeCheckbox.style.borderStyle = 'solid';
    completeCheckbox.style.padding = '5px';
    completeCheckbox.style.width = '23px';
    completeCheckbox.style.height = '23px';
    completeCheckbox.style.borderRadius = '50%';

    const deleteButton = createDeleteButton(li, task);
    wrapperCheck.appendChild(completeCheckbox);

    completeCheckbox.addEventListener('change', () => {
      task.isCompleted = !task.isCompleted;
      if (task.isCompleted) {
        spanofTask.classList.add('completed');
        spanofTask.style.textDecoration = "line-through";
      } else {
        spanofTask.classList.remove("completed");
        spanofTask.style.textDecoration = "none";
      }
      saveTaskToLocalStorage(task);
    });

    wrapper.appendChild(span);
    wrapper.appendChild(spanofTask);

    li.appendChild(wrapperCheck);
    li.appendChild(wrapper);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    if (task.isCompleted) {
      spanofTask.classList.add('completed');
      spanofTask.style.textDecoration = "line-through";
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
