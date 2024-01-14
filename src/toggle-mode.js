let darMode = true;

const buttonToggle = document.querySelector('#toggle-mode');

buttonToggle.addEventListener('click', (e) =>{
    document.documentElement.classList.toggle('light')
    const mode = darMode ? 'light' : 'dark';
    e.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado!`;

        darMode = !darMode;

})