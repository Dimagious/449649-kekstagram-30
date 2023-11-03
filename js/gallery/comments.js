const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
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

const renderComments = (comments) => {
  container.querySelectorAll('.social__comment').forEach((comment) => comment.remove());
  container.append(...createComments(comments));
  commentsTotal.textContent = comments.length;
  commentsShown.textContent = comments.length <= 5 ? comments.length : '5';
  // временно скрываем блоки с количеством комментариев и кнопкой загрузки комментариев
  socialCommentCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
};

export {renderComments};
