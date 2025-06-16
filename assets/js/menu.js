const menuBtn = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header__nav');
const menuElement = document.querySelectorAll('.menu-item');

function toggleMenu() {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active');
    })

    menuElement.forEach(elem => {
        elem.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
        })
    })
}

toggleMenu()