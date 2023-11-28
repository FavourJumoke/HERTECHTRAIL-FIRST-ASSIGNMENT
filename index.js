const textChanges = document.querySelectorAll('p');

textChanges.forEach((changeTextStyle) => {
    changeTextStyle.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'Blue';
        e.target.style.color = 'white';
        changeTextStyle.innerHTML = 'Clicked';
    })
})