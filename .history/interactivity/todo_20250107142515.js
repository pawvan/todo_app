function addTask() {
    const taskInput = document.getElementById('todo-input');
    const  taskText = taskInput.value.trim();
    const  taskList = document.getElementById('task-list');
    let isCompleted =false
     if (taskText !== '') {
        const  li = document.createElement('li');
        li.textContent = taskText;
        const completedButton  = document.createElement('button')
        completedButton.textContent =isCompleted ? 
        const  deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            li.remove(); 
        };
        completedButton.onclick =function(){
            isCompleted=!isCompleted
        }
        li.appendChild(deleteButton);
        li.appendChild(completedButton)
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
