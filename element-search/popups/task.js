function activeModal(modalWindow) {
	document.getElementById(modalWindow).className = 'modal modal_active'; 
}

function inactiveModal(modalWindow) {
	document.getElementById(modalWindow).className = 'modal'; 
}

for(let i=0; i<document.querySelectorAll('.modal__close').length; i++) {
	document.querySelectorAll('.modal__close').item(i).onclick = function() {
		this.closest('.modal').className = 'modal';
	}
}

for(let i=0; i<document.querySelectorAll('.btn').length; i++) {
	document.querySelectorAll('.btn').item(i).onclick = function() {
		activeModal('modal_success');		
		inactiveModal('modal_main');
	}
}

activeModal('modal_main');