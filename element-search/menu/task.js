function getElement(index) {    
	return document.querySelectorAll('.menu__link').item(index);
}

for(i = 0; i < document.querySelectorAll('.menu__link').length; i++) {
	let currentElement = getElement(i);
	
	currentElement.onclick = () => { 	
		if(currentElement.closest('li').querySelector('ul') && 
		currentElement.closest('li').querySelector('ul').className === 'menu menu_sub') {			
			currentElement.closest('li').querySelector('ul').className = 'menu menu_sub menu_active';
			return false;
		} else if(currentElement.closest('li').querySelector('ul') && 
		currentElement.closest('li').querySelector('ul').className === 'menu menu_sub menu_active') {
			currentElement.closest('li').querySelector('ul').className = 'menu menu_sub';
			return false;
		} 
	}	
}