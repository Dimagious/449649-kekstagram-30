const REG_EXP_FOR_HASHTAG = new RegExp('/^#[a-zа-яё0-9]{1,19}$/i');
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS = 5;
const ERROR_INVALID_HASHTAG = 'Введён невалидный хэш-тег';
const ERROR_TOO_MANY_HASHTAGS = 'Превышено количество хэш-тегов';
const ERROR_DUPLICATE_HASHTAGS = 'Хэш-теги не должны повторяться';
const ERROR_TOO_MANY_SYMBOLS = `Длина комментария больше ${MAX_COMMENT_LENGTH} символов`;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const resetCloseByEscape = (evt) => evt.stopPropagation();
hashtagInput.addEventListener('keydown', resetCloseByEscape);
commentInput.addEventListener('keydown', resetCloseByEscape);

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const validateHashTags = (value) => {
  const hashTagsToValidate = value.toLowerCase().trim().split(/\s+/);
  return hashTagsToValidate.find((item) => !REG_EXP_FOR_HASHTAG.test(item));
};
const isValidHashtagLength = (value) => value.toLowerCase().trim().split(/\s+/).length <= MAX_HASHTAGS;
const hasNoDuplicates = (value) => {
  const hashTagsToValidate = value.toLowerCase().trim().split(/\s+/);
  return new Set(hashTagsToValidate).size === hashTagsToValidate.length;
};
const validateComment = (value) => value.length < MAX_COMMENT_LENGTH;

pristine.addValidator(hashtagInput, validateHashTags, ERROR_INVALID_HASHTAG, 1, true);
pristine.addValidator(hashtagInput, isValidHashtagLength, ERROR_TOO_MANY_HASHTAGS, 2, true);
pristine.addValidator(hashtagInput, hasNoDuplicates, ERROR_DUPLICATE_HASHTAGS, 3, true);
pristine.addValidator(commentInput, validateComment, ERROR_TOO_MANY_SYMBOLS, 1, true);

export { pristine };
