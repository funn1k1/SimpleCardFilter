const btn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

btn.addEventListener('click', () => {
  modal.classList.add('modal__active');
  
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', hideModal);
});

function closeModal() {
  modal.classList.remove("modal__active");
  closeBtn.removeEventListener("click", closeModal);
  modal.removeEventListener('click', hideModal);
}

function hideModal(event) {
  if (event.target === modal) {
    closeModal();
  }
}