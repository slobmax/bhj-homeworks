let arraySliders = Array.from(document.querySelectorAll('.slider__item'));
let left = document.querySelectorAll('.slider__arrow').item(0);
let right = document.querySelectorAll('.slider__arrow').item(1);

left.onclick = () => {
	let leftPosition = arraySliders.findIndex((item) => item.className === 'slider__item slider__item_active');
	
	leftPosition <= 0 ? (arraySliders[leftPosition].className = 'slider__item') && 
	(arraySliders[leftPosition + arraySliders.length - 1].className = 'slider__item slider__item_active') : 	
	(arraySliders[leftPosition].className = 'slider__item') &&
	(arraySliders[leftPosition - 1].className = 'slider__item slider__item_active');	
}

right.onclick = () => {
	let rightPosition = arraySliders.findIndex((item) => item.className === 'slider__item slider__item_active');
	
	rightPosition >= arraySliders.length - 1 ? (arraySliders[rightPosition].className = 'slider__item') && 
	(arraySliders[rightPosition - arraySliders.length + 1].className = 'slider__item slider__item_active') : 	
	(arraySliders[rightPosition].className = 'slider__item') &&
	(arraySliders[rightPosition + 1].className = 'slider__item slider__item_active');	
}