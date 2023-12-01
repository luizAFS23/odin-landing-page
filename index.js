const container = document.querySelector('#container');

const btn = document.querySelectorAll('button')


btn.forEach((button) =>{
    button.addEventListener('click', () => {
        alert(button.id);
    })
})

