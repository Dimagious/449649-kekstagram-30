import {isEscapeKey} from '../utilities.js';

const form = document.querySelector('.img-upload__form');
const popup = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');

const onUploadButtonClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeButton.click();
  }
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadButtonClick);
};

const openPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onUploadButtonClick);
};

export {openPopup};
