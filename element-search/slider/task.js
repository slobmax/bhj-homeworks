let right = document.querySelectorAll('.slider__arrow').item(1);
let left = document.querySelectorAll('.slider__arrow').item(0);

let counter = 0;

right.onclick = () => {
	
	counter++;							

	if(counter > 4) {            
		counter = 0; 
		document.querySelectorAll('.slider__item').item(counter + document.querySelectorAll('.slider__item').length - 1).className = 'slider__item';  
		document.querySelectorAll('.slider__item').item(counter).className = 'slider__item slider__item_active';                    
	} else {					
		document.querySelectorAll('.slider__item').item(counter).className = 'slider__item slider__item_active';
		document.querySelectorAll('.slider__item').item(counter - 1).className = 'slider__item'; 
	}		    
}

counter = document.querySelectorAll('.slider__item').length - 1;

left.onclick = () => {
		
	counter--;							

	if(counter < 0) {            
		counter = document.querySelectorAll('.slider__item').length - 1; 
		document.querySelectorAll('.slider__item').item(counter - document.querySelectorAll('.slider__item').length + 1).className = 'slider__item';  
		document.querySelectorAll('.slider__item').item(counter).className = 'slider__item slider__item_active';                    
	} else {					
		document.querySelectorAll('.slider__item').item(counter).className = 'slider__item slider__item_active';
		document.querySelectorAll('.slider__item').item(counter + 1).className = 'slider__item'; 
	}		   
}    