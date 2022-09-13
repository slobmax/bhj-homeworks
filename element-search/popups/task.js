function activeModal(modalWindow) {
	document.getElementById(modalWindow).className = 'modal modal_active'; 
}

function inactiveModal(modalWindow) {
	document.getElementById(modalWindow).className = 'modal'; 
}

activeModal('modal_main');

document.getElementsByClassName('modal__close_times').item(0).onclick = () => inactiveModal('modal_main');

document.getElementsByClassName('modal__close_times').item(1).onclick = () => inactiveModal('modal_success');

document.getElementsByClassName('show-success').item(0).onclick = () => {
	activeModal('modal_success');
	inactiveModal('modal_main');    
}