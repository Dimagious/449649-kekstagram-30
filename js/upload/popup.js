import {isEscapeKey} from '../utilities.js';

const form = document.querySelector('.img-upload__form');
const popup = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event) && !event.target.type?.startsWith('text')) {
    event.preventDefault();
    closeButton.click();
  }
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onDocumentKeydown);
};

export {openPopup};
