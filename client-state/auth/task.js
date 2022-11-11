const button = document.getElementById('signin__btn');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const form = document.getElementById('signin__form');
const userId = document.getElementById('user_id');

form.onsubmit = (event) => {     
    event.preventDefault();

    const formData = new FormData(document.forms.signin__form);  
    
    const xhr = new XMLHttpRequest();    

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.onreadystatechange = () => {  
           
        if(xhr.readyState === 4 && xhr.response.success === true) {
            localStorage.setItem('id', xhr.response.user_id);
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.insertAdjacentHTML('beforeBegin', xhr.response.user_id);
        } else  if(xhr.readyState === 4) {                       
            alert('Неверный логин/пароль');
        };      
    };
};

window.onload = () => {
    if(localStorage.id) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.insertAdjacentHTML('beforeBegin', localStorage.id);
    };
};