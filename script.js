    document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();
        
        const taskInput = document.getElementById('task-input').value;
        const dueDateInput = document.getElementById('due-date').value;
        const priorityInput = document.getElementById('priority').value;
        const categoryInput = document.getElementById('category').value;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput} - ${dueDateInput} - ${priorityInput} - ${categoryInput}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(li);

        document.getElementById('task-input').value = '';
        document.getElementById('due-date').value = '';
        document.getElementById('priority').value = 'low';
        document.getElementById('category').value = '';

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('complete');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }
});
