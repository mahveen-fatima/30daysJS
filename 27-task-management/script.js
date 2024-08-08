document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    let tasks = [];
    let isEditing = false;
    let currentTaskIndex = null;

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskTitle = document.getElementById('task-title').value;
        const taskDesc = document.getElementById('task-desc').value;
        const taskDate = document.getElementById('task-date').value;

        const task = {
            title: taskTitle,
            description: taskDesc,
            dueDate: taskDate
        };

        if (isEditing) {
            updateTask(currentTaskIndex, task);
        } else {
            tasks.push(task);
        }

        displayTasks(tasks);
        taskForm.reset();
        isEditing = false;
    });

    function displayTasks(tasks) {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const title = document.createElement('h3');
            title.textContent = task.title;

            const desc = document.createElement('p');
            desc.textContent = task.description;

            const dueDate = document.createElement('span');
            dueDate.textContent = `Due: ${task.dueDate}`;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-btn';
            editButton.addEventListener('click', () => {
                populateFormForEdit(task, index);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => {
                confirmDeletion(index);
            });

            li.appendChild(title);
            li.appendChild(desc);
            li.appendChild(dueDate);
            li.appendChild(editButton);
            li.appendChild(deleteButton);

            taskList.appendChild(li);
        });
    }

    function populateFormForEdit(task, index) {
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-desc').value = task.description;
        document.getElementById('task-date').value = task.dueDate;

        isEditing = true;
        currentTaskIndex = index;
    }

    function updateTask(index, updatedTask) {
        tasks[index] = updatedTask;
        displayTasks(tasks);
    }

    function confirmDeletion(index) {
        const confirmed = confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            deleteTask(index);
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks(tasks);
    }
});
