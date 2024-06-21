let taskinput = document.getElementById('todo-input')
let taskList=document.getElementById('taskList')
function addList(){
    let tskTxt = taskinput.value.trim()
    if (tskTxt !==''){
        let li  =  document.createElement('li');
        li.textContent=tskTxt;
        taskList.appendChild(li)
        taskinput.value =''       
    }
}
taskinput.addEventListener('key')