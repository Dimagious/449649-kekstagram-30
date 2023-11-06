import {renderThumbnails} from './thumbnails.js';
import {renderPopupDetails} from './popup.js';

const renderGallery = (createPostData) => {
  renderThumbnails(createPostData);
  document.addEventListener('thumbnailSelect', (event) => {
    renderPopupDetails(event.detail);
  });
};

export {renderGallery};
