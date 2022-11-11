const editor = document.getElementById('editor');
editor.oninput = () => localStorage.setItem('editor', editor.value);

window.onload = () => {
    !localStorage ? 
    editor.value = '' :
    editor.value = localStorage.editor;
};

const button = document.getElementById('clear');
button.onclick = () => {
    editor.value = '';
    localStorage.editor = '';
};