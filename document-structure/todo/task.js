//Задание №2

const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const taskTitle = input.value.trim();

	if(taskTitle !== '') {
		addTask(taskTitle);
		input.value = '';
	}
});

function addTask(title) {
	const task = createTaskElement(title);

	const removeButton = task.querySelector('.task__remove');
	removeButton.addEventListener('click', function() {
		removeTask(task);
	});

	taskList.appendChild(task);
}

function createTaskElement(title) {
	const task = document.createElement('div');
	task.className = 'task';

	const taskTitle = document.createElement('div');
	taskTitle.className = 'task__title';
	taskTitle.textContent = title;

	const removeButton = document.createElement('a');
	removeButton.href = '#';
	removeButton.className = 'task__remove';
	removeButton.innerHTML = '&times;';

	task.appendChild(taskTitle);
	task.appendChild(removeButton);

	return task;
}


function removeTask(task) {
	taskList.removeChild(task);
}