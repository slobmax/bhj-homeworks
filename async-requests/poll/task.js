const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.onreadystatechange = () => {
	if(xhr.readyState === 4) {    
		const title = xhr.response.data.title;	
		const answers = xhr.response.data.answers;	           
		const insertTitle = `${title}`;        
			
		pollTitle.insertAdjacentHTML('afterBegin', insertTitle);               

			answers.forEach(el => {				
				const insertAnswer = `
				<button class="poll__answer">${el}</button>
				`;

				pollAnswers.insertAdjacentHTML('afterBegin', insertAnswer);
			});
        
    const buttonAnswer = Array.from(document.querySelectorAll('.poll__answer'));

    buttonAnswer.forEach(el => el.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    }));            
  };
};