import {validateForm, resetForm} from './validation.js';
import {openPopup} from './popup.js';
import {onMinusButtonClick, onPlusButtonClick} from './scale.js';

const form = document.querySelector('.img-upload__form');
const inputPhoto = form.querySelector('.img-upload__input');
const scaleControls = document.querySelector('.img-upload__scale.scale');

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

  scaleControls.addEventListener('click', (event) => {
    switch (event.target) {
      case document.querySelector('.scale__control--smaller'):
        onMinusButtonClick();
        break;
      case document.querySelector('.scale__control--bigger'):
        onPlusButtonClick();
        break;
    }
  });
};

export {renderUpload};
