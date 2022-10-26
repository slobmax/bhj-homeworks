const text = document.getElementById('task__input');
const list = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

function addDiv() {

	const div = `<div class="task">
					<div class="task__title">${text.value}</div>
					<a href="#" class="task__remove">&times;</a>
				</div>`;

	list.insertAdjacentHTML('afterBegin', div); 

	text.value = '';

	const remove = list.querySelector('.task__remove');

	remove.addEventListener('click', (e) => {
		remove.closest('.task').remove();		
	})  
};

button.addEventListener('click', (e) => {
    
	if(text.value.trim().length > 0) {        
		addDiv();       
	} else {
		text.value = '';
	}
	
	e.preventDefault();
});