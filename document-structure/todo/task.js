const text = document.getElementById('task__input');
const list = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

function addDiv() {

	const div = `<div class="task">
					<div class="task__title">${text.value}</div>
					<a href="#" class="task__remove">&times;</a>
				</div>`;

	list.insertAdjacentHTML('beforeEnd', div); 

	text.value = '';  

	const remove = Array.from(document.querySelectorAll('.task__remove'));

	remove.forEach(el => el.addEventListener('click', (e) => {
			el.closest('.task').remove();
			e.preventDefault();
	}))    
};

button.addEventListener('click', (e) => {
    
	if(text.value.trim().length > 0) {        
		addDiv();       
	} else {
		text.value = '';
	}
	
	e.preventDefault();
});