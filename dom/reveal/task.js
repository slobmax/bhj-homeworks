let arr = Array.from(document.querySelectorAll('.reveal'));

arr.forEach((visibleElement) => {
	document.addEventListener('scroll', () => {	
		let {top, bottom} = visibleElement.getBoundingClientRect();
		top < window.innerHeight && bottom > 0 ? 
		visibleElement.className = 'reveal reveal_active' : 
		visibleElement.className = 'reveal';
	})
})