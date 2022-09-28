for(let i = 0; i < document.querySelectorAll('.tab').length; i++) {
	let currentTab = document.querySelectorAll('.tab').item(i); 
	let currentContent = document.querySelectorAll('.tab__content').item(i);

	currentTab.addEventListener('click', () => {				 
		let arrTab = Array.from(document.querySelectorAll('.tab'));
		let activeTab = arrTab.find(item => item.className === 'tab tab_active');
		let arrContent = Array.from(document.querySelectorAll('.tab__content'));
		let activeContent = arrContent.find(item => item.className === 'tab__content tab__content_active');

		activeTab.className = 'tab';  
		currentTab.className = 'tab tab_active';   
		activeContent.className = 'tab__content';
		currentContent.className = 'tab__content tab__content_active';
	});   
}
