

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const  taskText = taskInput.value.trim();
    const  taskList = document.getElementById('task-list');
    if (taskText !== '') {
        const  li = document.createElement('li');
        li.textContent = taskText;
        const  deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            li.remove(); 
        };
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}
