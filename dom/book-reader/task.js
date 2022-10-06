let arrOfControl = Array.from(document.querySelectorAll('.font-size'));

arrOfControl.forEach(element => {    
	
	element.addEventListener('click', (event) => { 
		   
		let index = arrOfControl.findIndex(item => item.classList.contains('font-size_active'));
		arrOfControl[index].classList.remove('font-size_active');        
		element.classList.toggle('font-size_active');
		
		let arrOfBook = Array.from(document.querySelectorAll('.book'));
		arrOfBook.forEach(el => {
			if(element.classList.contains('font-size_small')) {
				el.classList.remove('book_fs-big');
				el.classList.add('book_fs-small');
			} else if(element.classList.contains('font-size_big')) {
				el.classList.remove('book_fs-small');
				el.classList.add('book_fs-big');
			} else {
				el.classList.add('');
			}						
		})	

		event.preventDefault();
	})
});