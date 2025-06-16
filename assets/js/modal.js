const rentModal = document.querySelector('.rent-modal');
const overflow = document.querySelector('.overflow');
const rentBtn = document.getElementById('rentBtn');
const closeModalBtn = document.querySelector('.modal__close');

const elements = [rentModal, overflow]

rentBtn.addEventListener('click', openModal);

function openModal() {

    elements.forEach(elem => {
        elem.classList.remove('hide')
    })

    document.body.style.overflowY = 'hidden'

    closeModalBtn.addEventListener('click', closeModal);
}

function closeModal() {
    elements.forEach(elem => {
        elem.classList.add('hide');
    })

    document.body.style.overflowY = 'scroll'
}