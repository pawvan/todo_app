function addTask() {
    const todo-container =document.
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('task-list');
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.onclick = function() {
            if (li.classList.contains('completed')) {
                li.classList.remove('completed');
                completeButton.textContent = 'Complete';
                li.style.textDecoration="none"
            } else {
                li.classList.add('completed');
                completeButton.textContent = 'Uncomplete';
                li.style.textDecoration="line-through"
            }
        };
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    else{
        const createAlert  = document.createElement('div')
        createAlert.textContent ="Please enter the task"
       
    }
}
