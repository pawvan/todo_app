function addTask() {
  const todoContainer = document.getElementsByClassName("todo-container")[0];
  const taskInput = document.getElementById("todo-input");
  const taskText = taskInput.value.trim();
  const alertElement = document.querySelector(".alert");
  const taskList = document.getElementById("task-list");

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    
  const deleteButton=  createDeleteButton()
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    ``;
    taskInput.value = "";
  } 
  else {
    alertElement ? '' :alertThing()
  }
}
function alertThing(){
    const createDiv = document.createElement("div");
    createDiv.textContent = "please enter the task";
    todoContainer.appendChild(createDiv);
    createDiv.classList.add("alert");

}
function createDeleteButton(){
    const deleteButton = document.createElement("button");
deleteButton.textContent = "x";
deleteButton.classList.add("delete-btn");
deleteButton.onclick = function () {
  li.remove();
};
return deleteButton
}