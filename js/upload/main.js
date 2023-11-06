import {validateForm, resetForm} from './validation.js';
import {openPopup} from './popup.js';

const form = document.querySelector('.img-upload__form');
const inputPhoto = form.querySelector('.img-upload__input');

const renderUpload = () => {
  inputPhoto.addEventListener('change', () => {
    openPopup();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

  form.addEventListener('reset', () => {
    resetForm();
  });
};

export {renderUpload};
