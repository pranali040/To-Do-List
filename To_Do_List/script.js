const inputBox = document.getElementById('taskid');
const taskcontainer = document.getElementById('task-list');

function AddTask() {
    if (inputBox.value === '') {
        alert('Please enter a task!');
        return;
    } else {
        let li = document.createElement('li');
        li.innerHTML = `<span class="task-text">${inputBox.value}</span>`;
        
        // Delete Button
        let deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = "\u00d7";
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        // Edit Button
        let editBtn = document.createElement('span');
        editBtn.innerHTML = "\u270E"; // ✎ pencil icon
        editBtn.classList.add('edit-btn');
        editBtn.style.marginRight = "5px"; // space it a bit
        li.appendChild(editBtn);

        taskcontainer.appendChild(li);
    }

    inputBox.value = '';
    saveData();
}

taskcontainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.classList.contains('edit-btn')) {
        const li = e.target.parentElement;
        const taskText = li.querySelector('.task-text');
        let newTask = prompt("Edit your task", taskText.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask.trim();
            saveData();
        }
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', taskcontainer.innerHTML);
}

function showTask() {
    taskcontainer.innerHTML = localStorage.getItem('data');
}
showTask();