
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");
 
  if (taskText !== "") {
    const now  = new Date()
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
    const span = document.createElement('span')
    span.textContent =newTask.createAt
    li.textContent = newTask.text;
    const completeRadio = document.createElement('input')
    completeRadio.type='radio'
    completeRadio.style.backgroundColor=
    const deleteButton = createDeleteButton(li, newTask);
    li.appendChild(completeButton);
    li.appendChild(span)
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








function createCompleteButton(listElement, task) {
  const completeCallBack = () => {
    task.isCompleted = !task.isCompleted;
    if (!task.isCompleted) {
      listElement.classList.remove("completed");
      completeButton.textContent = "Complete";
      listElement.style.textDecoration = "none";
    } else {
      listElement.classList.add("completed");
      completeButton.textContent = "Uncomplete";
      listElement.style.textDecoration = "line-through";
    }
  };

  const completeButton = createButton("Complete", ['complete-btn'], completeCallBack);
  return completeButton;
}


function createButton(label, classNames, onclickMethod ,type){
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(...classNames);
  console.log(getRandomColor())
  button.style.backgroundColor=getRandomColor()
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
    li.textContent = task.text;
    
    const completeButton = createCompleteButton(li, task);
    const deleteButton = createDeleteButton(li, task);
    
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
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
