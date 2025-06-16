const dropdown = document.getElementById('sortDropdown');
const toggleButton = document.getElementById('dropdown__button');
const dropdownArrow = document.getElementById('dropdown__arrow')
const dropdownMenu = document.getElementById('dropdown__menu');
const selectedText = document.getElementById('selectedText');

const dropdownElements = [dropdownMenu, dropdownArrow, toggleButton]

function handleMenuClick(e) {
    if (e.target.classList.contains('dropdown__menu-item')) {
        const newSelected = e.target.textContent;
        const oldSelected = selectedText.textContent;

        selectedText.textContent = newSelected;
        e.target.textContent = oldSelected;

        dropdownElements.forEach(elem => {
            elem.classList.remove('active');
        });
    }
}

function dropdownOpen() {
    dropdownElements.forEach(elem => {
        elem.classList.add('active')
    });
};

dropdownMenu.addEventListener('click', handleMenuClick);

toggleButton.addEventListener('click', dropdownOpen);

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownElements.forEach(elem => {
            elem.classList.remove('active')
        })
    }
});