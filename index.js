function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    const newTaskText = prompt('Edit the task:', button.parentElement.firstChild.textContent);
    if (newTaskText !== null) {
        button.parentElement.firstChild.textContent = newTaskText;
    }
}

function deleteTask(button) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(button.parentElement);
}