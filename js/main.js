import { buildPostsData } from './data.js';
import { renderGallery } from './gallery/gallery.js';
import { renderUpload } from './upload/upload.js';

renderGallery(buildPostsData(19));
renderUpload();
