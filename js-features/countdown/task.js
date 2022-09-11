let timer; 
let countSec = document.getElementById('timer').textContent;
counter(); 

function counter() {   
  countSec--;  
	document.getElementById('timer').textContent = countSec;	
  if (countSec <= 0){    
    clearTimeout(timer);    
    alert('Вы победили в конкурсе!');  
  } else {
    timer = setTimeout(counter, 1000);
  }
}