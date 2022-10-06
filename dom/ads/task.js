setInterval(() => {
	let arrOfRotator = Array.from(document.querySelectorAll('.rotator__case'));
	let index = arrOfRotator.findIndex(item => item.classList.contains('rotator__case_active'));

	if(index >= 0 && index < arrOfRotator.length - 1) {
		arrOfRotator[index].classList.remove('rotator__case_active');
		arrOfRotator[index + 1].classList.add('rotator__case_active');  
	} else if(index === arrOfRotator.length - 1) {
		arrOfRotator[index].classList.remove('rotator__case_active');
		arrOfRotator[index - arrOfRotator.length + 1].classList.add('rotator__case_active'); 
	}   

}, 1000);