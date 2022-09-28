let button = document.querySelector('.dropdown');

button.addEventListener('click', () => {
	document.querySelector('ul').className === 'dropdown__list' ? 
	document.querySelector('ul').className = 'dropdown__list dropdown__list_active' : 
	document.querySelector('ul').className = 'dropdown__list';    
});

for(let i = 0; i < document.querySelectorAll('.dropdown__item').length; i++) {
	let currentItem = document.querySelectorAll('.dropdown__link').item(i);    

	currentItem.closest('.dropdown__item').addEventListener('click', (event) => {               
		document.querySelector('.dropdown__value').textContent = currentItem.textContent;        
		event.preventDefault();        
	});
}