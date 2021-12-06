(() => {
  const franchiseModalOpenRef = document.querySelector('[data-franchise-modal-open]');
  const franchisePopUpRef = document.querySelector('[data-franchise-popup]');
  const franchiseModalClose = document.querySelector('[data-franchise-modal-close]');

  franchiseModalOpenRef.addEventListener('click', () => {
    franchisePopUpRef.classList.toggle('is-open');
  });

  franchiseModalClose.addEventListener('click', () => {
    franchisePopUpRef.classList.toggle('is-open');
  });
})();
