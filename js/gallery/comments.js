const COMMENTS_TO_SHOW = 5;
const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');
const commentsTotal = document.querySelector('.social__comment-total-count');
const commentsShown = document.querySelector('.social__comment-shown-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

const createComments = (comments) => comments.map((properties) => {
  const {avatar, message, name} = properties;
  const comment = template.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const data = [];
const onCommentsLoaderButtonClick = () => {
  container.append(...createComments(data.splice(0, COMMENTS_TO_SHOW)));
  commentsShown.textContent = container.childElementCount;
  commentsLoaderButton.classList.toggle('hidden', !data.length);
};

const renderComments = (comments) => {
  data.splice(0, data.length, ...comments);
  container.replaceChildren();
  commentsTotal.textContent = comments.length;
  commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
  commentsLoaderButton.click();
};

export {renderComments};
