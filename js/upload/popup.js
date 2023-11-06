import {isEscapeKey} from '../utilities.js';
import {validateForm, resetForm} from './validation.js';

const uploadForm = document.querySelector('.img-upload__form');
const inputPhoto = uploadForm.querySelector('.img-upload__input');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');

const onUploadButtonClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeButton.click();
  }
};

const closePopup = () => {
  editForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadButtonClick);
  uploadForm.reset();
};

const openPopup = () => {
  editForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onUploadButtonClick);
};

const renderPopup = () => {
  inputPhoto.addEventListener('change', () => {
    openPopup();
  });

  uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

  uploadForm.addEventListener('reset', () => {
    resetForm();
  });
};

export {renderPopup};
