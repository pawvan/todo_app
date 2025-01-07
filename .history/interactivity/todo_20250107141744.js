
function addTask() {
    const taskInput = document.getElementById('todo-input');
    const  taskText = taskInput.value.trim();
    const  taskList = document.getElementById('task-list');

    if (taskText !== '') {
        let li = document.createElement('li');
        li.textContent = taskText;

        // Append a delete button to each task
        let deleteButton = document.createElement('button');
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
