const modal = document.getElementById('subscribe-modal');
const modalClose = modal.querySelector('.modal__close');

if(getCookie('modal') !== 'modal=closed') {	
    modal.classList.add('modal_active');
};

modalClose.onclick = () => {	
	setCookie('modal', 'closed');    
    modal.classList.remove('modal_active');
};

function setCookie(name, value) {	
	document.cookie = name + '=' + encodeURIComponent(value);		
};

function getCookie(name) {
	const cookieArr = document.cookie.split('; ');
	const cookie = cookieArr.find(el => el.startsWith(name + '='));		
    return cookie;	
};