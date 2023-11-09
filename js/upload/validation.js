import '../../vendor/pristine/pristine.min.js';

const REG_EXP_FOR_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS = 5;
const ERROR_INVALID_HASHTAG = 'Введён невалидный хэш-тег';
const ERROR_TOO_MANY_HASHTAGS = 'Превышено количество хэш-тегов';
const ERROR_DUPLICATE_HASHTAGS = 'Хэш-теги не должны повторяться';
const ERROR_TOO_MANY_SYMBOLS = `Длина комментария больше ${MAX_COMMENT_LENGTH} символов`;

const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const parseHashtags = (value) => value.toLowerCase().trim().split(/\s+/);
const validateHashTags = (value) => parseHashtags(value).every((hashtag) => REG_EXP_FOR_HASHTAG.test(hashtag));
const isValidHashtagLength = (value) => parseHashtags(value).length <= MAX_HASHTAGS;
const hasNoDuplicates = (value) => {
  const hashTagsToValidate = parseHashtags(value);
  return new Set(hashTagsToValidate).size === hashTagsToValidate.length;
};
const validateComment = (value) => value.length < MAX_COMMENT_LENGTH;

pristine.addValidator(hashtagInput, validateHashTags, ERROR_INVALID_HASHTAG, 1, true);
pristine.addValidator(hashtagInput, isValidHashtagLength, ERROR_TOO_MANY_HASHTAGS, 2, true);
pristine.addValidator(hashtagInput, hasNoDuplicates, ERROR_DUPLICATE_HASHTAGS, 3, true);
pristine.addValidator(commentInput, validateComment, ERROR_TOO_MANY_SYMBOLS);

const checkValidity = () => pristine.validate();
const resetValidity = () => pristine.reset();

export {checkValidity, resetValidity};
