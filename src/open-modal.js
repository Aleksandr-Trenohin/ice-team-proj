(() => {
const refs = {
    openModalBtn: document.querySelector('[data-modal-open-order]'),
    closeModalBtn: document.querySelector('[data-modal-close-order]'),
    modal: document.querySelector('[data-modal-order]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
}
})();