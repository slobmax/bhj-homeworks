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

text.addEventListener('keyup', (e) => {
    
	if(e.key === 'Enter' && text.value) {
			addDiv();            
	} 
});

button.addEventListener('click', (e) => {
    
	if(text.value) {        
			addDiv();       
	}
	
	e.preventDefault();
});