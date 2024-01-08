document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function () {
            this.removeTask(task);
        });
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}

function clearTasks() {
    localStorage.removeItem('tasks');
    loadTasks();
}

// Extend the functionality as needed
HTMLElement.prototype.removeTask = function (task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
};

