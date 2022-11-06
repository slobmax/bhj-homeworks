const editor = document.getElementById('editor');
editor.value = localStorage.editor;
editor.oninput = () => localStorage.setItem('editor', editor.value);

const button = document.getElementById('clear');
button.onclick = () => {
    editor.value = '';
    localStorage.editor = '';
};    