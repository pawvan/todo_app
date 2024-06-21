let taskInput = document.getElementById('todo-input')
let taskList=document.getElementById('task-List')
function addList(){
    let tskTxt = taskinput.value.trim()
    if (tskTxt !==''){
        let li  =  document.createElement('li');
        li.textContent=tskTxt;
        taskList.appendChild(li)
        taskInput.value =''    
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            li.remove(); 
        };

        li.appendChild(deleteButton);   
    }
}

taskInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addList();
    }
});