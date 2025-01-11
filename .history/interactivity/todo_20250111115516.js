function addTask() {
  const todoContainer = document.getElementsByClassName("todo-container")[0];
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");
  taskInput.append(li);
  if (taskText !== "") {
    li.textContent = taskText;
    const completeButton = createCompleteButton(li);
    const deleteButton = createDeleteButton(li);
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

function createDeleteButton(listElement) {
    const removeLi =()=>{
        listElement.remove()
    }

  const deleteButton = createButton("x", "delete-btn", removeLi);
  return deleteButton;
}

function createCompleteButton(listElement) {
    const completeCallBack =()=>{
        if (listElement.classList.contains("completed")) {
            listElement.classList.remove("completed");
            completeButton.textContent = "Complete";
            listElement.style.textDecoration = "none";
          } else {
            listElement.classList.add("completed");
            completeButton.textContent = "Uncomplete";
            listElement.style.textDecoration = "line-through";
          }
    }
    const completeButton = createButton("Complete","complete-btn",completeCallBack); 

return completeButton}
function createButton(Label, className, onclickMethod) {
  const button = document.createElement("button");
  button.textContent = Label;
  button.classList.add(className);
  button.onclick = () => {
    onclickMethod();
  };
  return button;
}
