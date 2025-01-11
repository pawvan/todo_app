function createCompleteButton(listElement, task) {
    const completeCallBack = () => {
      task.isCompleted = !task.isCompleted;
      if (!task.isCompleted) {
        listElement.classList.remove("completed");
        completeInput.checked = false;
        listElement.style.textDecoration = "none";
      } else {
        listElement.classList.add("completed");
        completeInput.checked = true;
        listElement.style.textDecoration = "line-through";
      }
      saveTaskToLocalStorage(task);
    };
  
    const completeInput = document.createElement('input');
    completeInput.type = 'checkbox';
    completeInput.checked = task.isCompleted;
  
    completeInput.addEventListener('change', completeCallBack);
  
    return completeInput;
  }
  