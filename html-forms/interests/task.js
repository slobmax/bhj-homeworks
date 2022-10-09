const arrOfInput = document.querySelectorAll('input');

arrOfInput.forEach(element => element.addEventListener('change', () => {

		const arrOfUl = Array.from(document.querySelectorAll('.interests_active'));

		arrOfUl.forEach(el => {
			if(el.closest('li').querySelector('input').checked === true) {
				el.firstElementChild.querySelector('input').checked = true;
				el.lastElementChild.querySelector('input').checked = true;
			} else if(el.closest('li').querySelector('input').checked === false) {
				el.firstElementChild.querySelector('input').checked = false;
				el.lastElementChild.querySelector('input').checked = false;
			}
		})		
	})
);