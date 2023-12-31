document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" onchange="toggleTask(this)">
                <span>${taskText}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function toggleTask(checkbox) {
        const taskText = checkbox.nextElementSibling;
        taskText.classList.toggle('completed', checkbox.checked);
    }

    function deleteTask(button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    }

    window.addTask = addTask;
    window.toggleTask = toggleTask;
    window.deleteTask = deleteTask;
});
