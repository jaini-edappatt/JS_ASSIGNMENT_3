const tskIpt = document.getElementById('tskIpt');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = tskIpt.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

  
    const listItem = document.createElement('li');
    listItem.textContent = taskText;


    const deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    });

   
    const toggleBtn = document.createElement('button');
    toggleBtn.className = "btn btn-sm btn-warning me-2";
    toggleBtn.textContent = 'Edit';
    toggleBtn.classList.add('toggle-btn'); 
    toggleBtn.addEventListener('click', () => {
        listItem.classList.toggle('delred'); 
    });

    
    listItem.appendChild(toggleBtn);
    listItem.appendChild(deleteBtn);

    
    taskList.appendChild(listItem);


    taskInput.value = '';
});