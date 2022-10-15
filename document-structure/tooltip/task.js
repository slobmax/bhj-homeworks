const arr = Array.from(document.querySelectorAll('.has-tooltip'));
const div = document.createElement('div');
div.classList.add('tooltip');

arr.forEach(el => el.addEventListener('click', (event) => {
	const {top, left} = el.getBoundingClientRect();    
	el.insertAdjacentElement('afterEnd', div);    
	div.setAttribute('style', `top: ${top + 20}px; left: ${left}px`);
	div.classList.add('tooltip_active');
	div.textContent = el.title;
	event.preventDefault();    
}));