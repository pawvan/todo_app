function addTask() {
    const taskInput = document.getElementById('todo-input');
    const  taskText = taskInput.value.trim();
    const  taskList = document.getElementById('task-list');
    let 
    if (taskText !== '') {
        const  li = document.createElement('li');
        li.textContent = taskText;
        const completedButton  = document.createElement('button')
        const  deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            li.remove(); 
        };
        li.appendChild(deleteButton);
        li.appendChild(completedButton)
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
