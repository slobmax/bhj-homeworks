let countClick = document.getElementById('clicker__counter').textContent;
let timeStart = new Date();

cookie.onclick = function() {       	
	countClick++; 	
	document.getElementById('clicker__counter').textContent = countClick;	
	if(cookie.width === 200) {
			cookie.width = 250;
	} else if(cookie.width === 250) {
			cookie.width = 200;
	}	

	let timeEnd = new Date();		  
	let clickSpeed = (1 / ((timeEnd - timeStart) / 1000));	

	document.getElementById('clicker__speed').textContent = clickSpeed.toFixed(2);
	timeStart = timeEnd;
}