function setActive() {
	let arr = Array.from(document.querySelectorAll('.rotator__case'));
	let index = arr.findIndex(item => item.className === 'rotator__case rotator__case_active');

	if(index >= 0 && index < arr.length - 1) {
			arr[index].className = 'rotator__case';
			arr[index + 1].className = 'rotator__case rotator__case_active';  
	} else if(index === arr.length - 1) {
			arr[index].className = 'rotator__case';
			arr[index - arr.length + 1].className = 'rotator__case rotator__case_active';  
	}      
}

setInterval(setActive, 1000);