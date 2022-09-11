function getHole(index) {    
	return document.getElementById('hole' + index);
}

let deadCount = 0;
let lostCount = 0;

for(i = 1; i < 10; i++) {    
	let currentHole = getHole(i);
	
	currentHole.onclick = function() {
		
		if(currentHole.className.includes('hole_has-mole')) {
			deadCount++;            			
			document.getElementById('dead').textContent = deadCount;	
			deadCount = deadCount;	
		} else {
			lostCount++;			
			document.getElementById('lost').textContent = lostCount;	
			lostCount = lostCount;		
		} 	
		
		function reset() {
			deadCount = 0;
			lostCount = 0;
			document.getElementById('dead').textContent = 0;
			document.getElementById('lost').textContent = 0;
		}
		
		if(deadCount === 10) {
			alert('Победа!');
			reset();			
		} else if(lostCount === 5) {
			alert('Вы проиграли!');
			reset();			
		}		
	}	
}  

