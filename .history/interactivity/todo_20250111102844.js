function addTask() {
    const todoContainer = document.getElementsByClassName('todo-container')[0];
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('task-list');

    // Remove any existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    if (taskText !== '') {
        // Create a new task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.onclick = function() {
            if (li.classList.contains('completed')) {
                li.classList.remove('completed');
                completeButton.textContent = 'Complete';
                li.style.textDecoration = 'none';
            } else {
                li.classList.add('completed');
                completeButton.textContent = 'Uncomplete';
                li.style.textDecoration = 'line-through';
            }
        };

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            li.remove();
        };

        // Append buttons and task to the list
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    } else {
        // Create an alert for empty input
        const createAlert = document.createElement('div');
        createAlert.textContent = 'Please enter the task';
        createAlert.classList.add('alert');
        createAlert.style.color = 'red';
        createAlert.style.marginTop = '10px';

        // Append alert to the container
        todoContainer.appendChild(createAlert);
    }
}
