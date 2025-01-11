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
    const completeButton = createCompleteButton();
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
        if (li.classList.contains("completed")) {
            li.classList.remove("completed");
            completeButton.textContent = "Complete";
            li.style.textDecoration = "none";
          } else {
            li.classList.add("completed");
            completeButton.textContent = "Uncomplete";
            li.style.textDecoration = "line-through";
          }
    }
    const completeButton = createButton("Complete",complete-btn",completeCallBack); 
//   const completeButton = document.createElement("button");
//   completeButton.textContent = "Complete";
//   completeButton.classList.add("complete-btn");
//   completeButton.onclick = function () {
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
//   };
//   return completeButton;
}
function createButton(Label, className, onclickMethod) {
  const button = document.createElement("button");
  button.textContent = Label;
  button.classList.add(className);
  button.onclick = () => {
    onclickMethod();
  };
  return button;
}
