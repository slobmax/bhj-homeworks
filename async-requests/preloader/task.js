const cources = document.getElementById('items');
const animations = document.getElementById('loader');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();

xhr.onreadystatechange = () => {
	if(xhr.readyState === 4) {    
		const valutes = xhr.response.response.Valute;        
		for (const valute in valutes) {            
			const div = `<div class="item">
			   						<div class="item__code">${valutes[valute].CharCode}</div>
										<div class="item__value">${valutes[valute].Value}</div>
										<div class="item__currency">руб.</div>
									</div>`
			
			cources.insertAdjacentHTML('beforeEnd', div);
		}
		
		animations.classList.remove('loader_active');
	};
};    