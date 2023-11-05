import {isEscapeKey} from '../utilities.js';
import {pristine} from './validation.js';

const uploadForm = document.querySelector('.img-upload__form');
const inputPhoto = uploadForm.querySelector('.img-upload__input');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');

const onUploadKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeButton.click();
  }
};

const closePopup = () => {
  editForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadKeydown);
  uploadForm.reset();
};

const openPopup = () => {
  editForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onUploadKeydown);
};

inputPhoto.addEventListener('change', () => {
  openPopup();
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    uploadForm.submit();
  }
});
