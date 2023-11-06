import { buildPostsData } from './data.js';
import { renderGallery } from './gallery/main.js';
import { renderUpload } from './upload/main.js';

renderGallery(buildPostsData(19));
renderUpload();
