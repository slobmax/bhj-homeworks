const chatWidget = document.querySelector('.chat-widget');

const arrOfMessages = [
	'Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 
	'Вы не купили ни одного товара, чтобы так с нами разговаривать', 
	'Мы ничего не будем вам продавать!', 
	'Где ваша совесть?',
	'Добрый день! До свидания!',
	'К сожалению все операторы сейчас заняты. Не пишите нам больше!',
	'Кто тут?'
];

const now = new Date().toLocaleTimeString().slice(0, -3);

function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));

const chatArea = document.getElementById('chat-widget__input');

chatArea.addEventListener('keyup', event => {    
	const messages = document.getElementById('chat-widget__messages');
	
	if(event.key === 'Enter' && chatArea.value.length > 0) {
		
		messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${now}</div>
				<div class="message__text">
					${chatArea.value}
				</div>
			</div>`;

		messages.innerHTML += `
		<div class="message">
			<div class="message__time">${now}</div>
				<div class="message__text">
					${arrOfMessages[getRandom(0, arrOfMessages.length)]}
				</div>
			</div>`;	
			
		chatArea.value = '';
	}	
});