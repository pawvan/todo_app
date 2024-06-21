let taskInput = document.getElementById('todo-input')
let taskList=document.getElementById('task-List')
function addList(){
    let tskTxt = taskinput.value.trim()
    if (tskTxt !==''){
        let li  =  document.createElement('li');
        li.textContent=tskTxt;
        taskList.appendChild(li)
        taskInput.value =''       
    }
}

taskInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addList();
    }
});