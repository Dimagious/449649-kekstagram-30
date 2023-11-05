import { buildPostsData } from './data.js';
import { renderGallery } from './gallery/gallery.js';
import './uploadForm/popup.js';

renderGallery(buildPostsData(19));
