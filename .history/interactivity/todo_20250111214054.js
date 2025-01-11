document.addEventListener("DOMContentLoaded", loadTasks);
function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");
  taskInput.append(li);
  if (taskText !== "") {
    const newTask ={
        id:Date.now()
        ,
        text:taskText,
        createAt:new Date().toISOString(),
        isCompleted :false
    } 
    li.textContent = newTask.text;
    const completeButton = createCompleteButton(li);
    const deleteButton = createDeleteButton(li);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
    saveTaskToLocalStorage(taskText); 
} else {
    alertElement ? "" : alertThing();
  }
}

function alertThing() {
    const todoContainer = document.getElementsByClassName("todo-container")[0];
  const createDiv = document.createElement("div");
  createDiv.textContent = "please enter the task";
  todoContainer.appendChild(createDiv);
  createDiv.classList.add("alert");
}

function createDeleteButton(listElement,task) {
  const removeLi = () => {
    removeTaskFromLocalStorage(task.id)
    listElement.remove();
  };

  const deleteButton = createButton("x", ["delete-btn","complete-btn"], removeLi);
  document.querySelectorAll('.delete-btn').forEach((button)=>{
    let parentElement  =button.closest("div")
    console.log(parentElement)
})
  return deleteButton;
}

function createCompleteButton(listElement,task) {
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
  const completeButton = createButton(
    "Complete",
    ['complete-btn']
,    completeCallBack
  );

  return completeButton;
}

function createButton(Label, classNames, onclickMethod) {
  const button = document.createElement("button");
  button.textContent = Label;
  button.classList.add(...classNames);
  button.onclick = () => {
    onclickMethod();
  };
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

function saveTaskToLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }

  function removeTaskFromLocalStorage(taskId){
    const tasks=getTasksFromLocalStorage()
    const updatedTasks = tasks.filter((task) => task.id !== taskID());
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }