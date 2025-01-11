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
      
      const wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
  
      const span = document.createElement('span');
      span.textContent = newTask.createAt;
      span.classList.add('task-createdAt');
  
      const spanofTask = document.createElement('span');
      spanofTask.textContent = newTask.text;
  
      wrapper.appendChild(spanofTask);
      wrapper.appendChild(span);
  
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.checked = newTask.isCompleted;
  
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
  
      li.appendChild(completeCheckbox);
      li.appendChild(wrapper);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      taskInput.value = "";
      saveTaskToLocalStorage(newTask);
    } else {
      alertElement ? "" : alertThing();
    }
  }
  