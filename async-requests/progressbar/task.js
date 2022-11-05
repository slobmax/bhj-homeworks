const form = document.getElementById('form');
const inputFile = document.getElementById('file');
const progress = document.getElementById('progress');

form.onsubmit = (event) => {
	event.preventDefault();
	const xhr = new XMLHttpRequest(); 
	const fileToUpload = inputFile.files[0];	
	
	xhr.upload.onprogress = function(event) {		
  		progress.value = `${event.loaded / event.total}`;
	};
 
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send(fileToUpload);	
};