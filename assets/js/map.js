const mapWrapper = document.querySelector('.location__map');

document.addEventListener('click', (event) => {
    mapWrapper.classList.toggle('isActive', event.target === mapWrapper);
});