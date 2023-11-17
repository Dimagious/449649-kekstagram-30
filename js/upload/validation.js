import '../../vendor/pristine/pristine.min.js';

const REG_EXP_FOR_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHAG_LENGTH = 20;
const MAX_HASHTAGS = 5;
const ERROR_INVALID_HASHTAG = 'Введён невалидный хэш-тег';
const ERROR_TOO_MANY_HASHTAGS = 'Превышено количество хэш-тегов';
const ERROR_DUPLICATE_HASHTAGS = 'Хэш-теги не должны повторяться';
const ERROR_TOO_MANY_SYMBOLS = `Длина комментария больше ${MAX_COMMENT_LENGTH} символов`;
const ERROR_TOO_LONG_HASHTAG = `Длина хэш-тега больше ${MAX_HASHAG_LENGTH} символов`;

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const split = (text) => text.split(' ').filter(Boolean);

pristine.addValidator(
  form.hashtags,
  (text) => split(text).every((word) => REG_EXP_FOR_HASHTAG.test(word)),
  ERROR_INVALID_HASHTAG,
  1,
  true
);
pristine.addValidator(form.hashtags, (text) => {
  const words = split(text.toLowerCase());
  return words.length === new Set(words).size;
}, ERROR_DUPLICATE_HASHTAGS, 1, true);

pristine.addValidator(
  form.hashtags,
  (text) => split(text).length <= MAX_HASHTAGS,
  ERROR_TOO_MANY_HASHTAGS,
  1,
  true
);
pristine.addValidator(
  form.hashtags,
  (text) => split(text).every((word) => word.length <= MAX_HASHAG_LENGTH),
  ERROR_TOO_LONG_HASHTAG,
  1,
  true
);
pristine.addValidator(
  form.description,
  (text) => text.length <= MAX_COMMENT_LENGTH,
  ERROR_TOO_MANY_SYMBOLS,
  1,
  true
);

const checkValidity = () => pristine.validate();
const resetValidity = () => pristine.reset();

export {checkValidity, resetValidity};
