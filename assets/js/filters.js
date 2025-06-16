document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.sidebar__checkbox');
    const priceInputs = document.querySelectorAll('.sidebar__price-field');
    const cards = document.querySelectorAll('.catalog-card');
    const resetButton = document.querySelector('.button--reset');

    function filterCards() {
      const selectedFilters = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.id);

      const priceFrom = parseInt(priceInputs[0].value) || 0;
      const priceTo = parseInt(priceInputs[1].value) || Infinity;

      cards.forEach(card => {
        const cardFilters = card.getAttribute('data-f')?.split(' ') || [];
        const matchFilter = selectedFilters.length === 0 || selectedFilters.some(f => cardFilters.includes(f));

        const priceElement = card.querySelector('.catalog-card__list-price');
        const cardPrice = parseInt(priceElement?.textContent) || 0;
        const matchPrice = cardPrice >= priceFrom && cardPrice <= priceTo;

        card.style.display = (matchFilter && matchPrice) ? '' : 'none';
      });
    }


    function resetFilters() {
      checkboxes.forEach(cb => cb.checked = false);
      priceInputs.forEach(input => input.value = '');
      cards.forEach(card => {
        card.style.display = '';
      });
    }

    checkboxes.forEach(cb => cb.addEventListener('change', filterCards));
    priceInputs.forEach(input => input.addEventListener('input', filterCards));
    resetButton.addEventListener('click', function (e) {
      e.preventDefault();
      resetFilters();
    });

    filterCards();
});