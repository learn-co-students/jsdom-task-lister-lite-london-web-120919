document.addEventListener('DOMContentLoaded', () => {
	// your code here
	const priorityColour = {
		1: 'red',
		2: 'orange',
		3: 'yellow',
		4: 'green',
		5: 'blue'
	};
	let listArray = [];
	const textField = document.getElementById('new-task-description');
	const dropdown = document.getElementById('priority');
	const listElement = document.getElementById('tasks');

	function sortArray() {
		listArray.sort((a, b) => a.priority - b.priority);
	}

	function listTasks() {
		listElement.innerHTML = '';
		sortArray();
		for (let index = 0; index < listArray.length; index++) {
			let element = document.createElement('li');
			element.innerHTML = `${listArray[index].task}`;
			element.id = index;
			element.style.color = priorityColour[listArray[index].priority];

			let deleteButton = document.createElement('button');
			deleteButton.class = 'delete';
			deleteButton.id = index;
			deleteButton.innerHTML = 'Delete';

			let editButton = document.createElement('button');
			editButton.class = 'edit';
			editButton.id = index;
			editButton.innerHTML = 'Edit?';

			element.appendChild(editButton);
			element.appendChild(deleteButton);
			listElement.appendChild(element);
		}
	}

	function resetForm(targetID) {
		document.querySelector('h2').remove();
		document.querySelector('#submitButton').value = 'Create New Task';
		document.getElementById('edit-task-form').id = 'create-task-form';
		let listRow = document.querySelector(`li[id="${targetID}"]`);
		while (listRow.hasChildNodes()) {
			listRow.removeChild(listRow.lastChild);
		}
		console.log(listArray);

		listTasks();
	}

	function editTask(targetID) {
		let listRow = document.querySelector(`li[id="${targetID}"]`);
		listRow.innerHTML = 'EDITING!!!!!!!!';
		let titleEdit = document.createElement('h2');
		titleEdit.innerText = 'Please edit your task!';
		titleEdit.style.color = 'red';
		document.querySelector('h1').appendChild(titleEdit);

		document.querySelector('#submitButton').value = 'Edit Task';
		textField.value = listArray[targetID].task;
		dropdown.value = listArray[targetID].priority;
		document.getElementById('create-task-form').id = 'edit-task-form';

		document.getElementById('edit-task-form').addEventListener('submit', e => {
			e.preventDefault();
			targetIDInt = parseInt(targetID);
			listArray.splice(targetIDInt, 1, {
				priority: dropdown.value,
				task: textField.value
			});
			e.target.reset();
			resetForm(targetID);
		});
	}

	document.getElementById('create-task-form').addEventListener('submit', e => {
		e.preventDefault();
		listArray.push({ priority: dropdown.value, task: textField.value });
		e.target.reset();
		listTasks();
	});

	listElement.addEventListener('click', e => {
		if (e.target.class == 'delete') {
			listArray.splice(e.target.id, 1);
			listTasks();
		} else if (e.target.class == 'edit') {
			editTask(e.target.id);
		}
	});
});
