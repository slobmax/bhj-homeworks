let arrOfReveal = Array.from(document.querySelectorAll('.reveal'));

arrOfReveal.forEach((visibleElement) => {
	document.addEventListener('scroll', () => {	
		let {top, bottom} = visibleElement.getBoundingClientRect();
		top < window.innerHeight && bottom > 0 ? 
		visibleElement.classList.add('reveal_active') : 
		visibleElement.classList.remove('reveal_active');
	})
});